/** @jsxRuntime classic */
/** @jsx jsx */
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, jsx, Label } from 'theme-ui';
import FieldContainer from '../utils/field-container';
import SpinnerButton from '../utils/SpinnerButton';

interface Props {}

const AdminLoginForm: React.FC<Props> = ({}) => {
  // make sure we skip logging in when already have token.
  useEffect(() => {
    const isAuth = localStorage.getItem('usfsc-auth');
    if (isAuth) router.push('/admin/membership-applications');
  }, []);

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(null);
  const router = useRouter();

  const onSubmit = async (data: { username: string; password: string }) => {
    setError(null);
    setSubmitting(true);
    const body = {
      identifier: data.username,
      password: data.password,
    };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      if (res.status === 200) {
        const resData = await res.json();
        localStorage.setItem('usfsc-auth', resData.jwt);
        router.push('/admin/review-membership-apps');
      } else {
        setError(true);
        setSubmitting(false);
      }
    } catch (e) {
      setError(true);
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: '500px',
        mx: [1, null, 'auto'],
        mt: 5,
        border: ['none', null, 1],
        padding: 3,
        boxShadow: ['none', null, 3],
      }}
    >
      <h2 sx={{ variant: 'headings.h3' }}>Log In</h2>
      <FieldContainer>
        <Label htmlFor="username">Username</Label>
        <Input name="username" id="username" ref={register} defaultValue="" />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          ref={register}
          defaultValue=""
        />
      </FieldContainer>
      <SpinnerButton
        type="submit"
        variant="contained"
        isDisabled={submitting}
        isLoading={submitting}
        sx={{
          display: 'block',
          marginLeft: 'auto',
        }}
      >
        Login
      </SpinnerButton>
      {error && (
        <p sx={{ color: 'crimson', textAlign: 'center', fontWeight: 700 }}>
          An error ocurred. Please double check the username or password.
        </p>
      )}
    </motion.form>
  );
};

export default AdminLoginForm;
