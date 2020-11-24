/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Button, Input } from 'theme-ui';
import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import updateAction from '../../lib/utils/updateAction';
import FieldContainer from '../utils/field-container';
import { motion } from 'framer-motion';
import { formAnimate, formSpring } from '../../lib/utils/animations';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IFormInput {
  email: string;
  phone: string;
}

const StepThree: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state: formState } = useStateMachine(updateAction);

  if (step !== 3) {
    return null;
  }

  const onSubmit = (data: IFormInput) => {
    const { email, phone } = data;
    action({
      contactInfo: {
        email,
        phone,
      },
    });
    setStep(4);
  };

  const { email, phone } = formState.data.contactInfo;

  return (
    <motion.form
      variants={formAnimate}
      transition={formSpring}
      initial="initial"
      animate="animate"
      exit="exit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 sx={{ variant: 'headings.h3' }}>Contact Info</h2>
      <FieldContainer>
        <Label htmlFor="email">Email Address</Label>
        <Input
          name="email"
          id="email"
          type="email"
          ref={register}
          required
          defaultValue={email ? email : ''}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          name="phone"
          id="phone"
          type="tel"
          ref={register}
          required
          defaultValue={phone ? phone : ''}
        />
      </FieldContainer>
      <div
        sx={{
          width: ['75%', '65%', '50%', 'auto'],
          mx: ['auto', null, null, 'inherit'],
          display: 'flex',
          justifyContent: 'space-between',
          mt: 3,
          flexFlow: 'row wrap-reverse',
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            setStep(step - 1);
          }}
          sx={{
            flex: ['0 1 100%', null, null, '0 1 33%'],
          }}
        >
          &larr; Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            flex: ['0 1 100%', null, null, '0 1 33%'],
          }}
        >
          Next &rarr;
        </Button>
      </div>
    </motion.form>
  );
};

export default StepThree;
