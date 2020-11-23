/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Box, Button, Input } from 'theme-ui';
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
  addressPrimary: string;
  addressSecondary: string;
  city: string;
  state: string;
  postalCode: string;
}

const StepFour: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state: formState } = useStateMachine(updateAction);

  if (step !== 4) {
    return null;
  }

  const onSubmit = (data: IFormInput) => {
    action({
      address: {
        addressPrimary: data.addressPrimary,
        addressSecondary: data.addressSecondary,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
      },
    });
    setStep(5);
  };

  const {
    addressPrimary,
    addressSecondary,
    city,
    state,
    postalCode,
  } = formState.data.address;

  return (
    <motion.form
      variants={formAnimate}
      transition={formSpring}
      initial="initial"
      animate="animate"
      exit="exit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 sx={{ variant: 'headings.h3' }}>Member Address</h2>
      <FieldContainer>
        <Label htmlFor="addressPrimary">Address Line 1</Label>
        <Input
          name="addressPrimary"
          id="addressPrimary"
          ref={register}
          required
          defaultValue={addressPrimary ? addressPrimary : ''}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="addressSecondary">Address Line 2</Label>
        <Input
          name="addressSecondary"
          id="addressSecondary"
          ref={register}
          defaultValue={addressSecondary ? addressSecondary : ''}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="city">City</Label>
        <Input
          name="city"
          id="city"
          ref={register}
          required
          defaultValue={city ? city : ''}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="state">State</Label>
        <Input
          name="state"
          id="state"
          ref={register}
          required
          defaultValue={state ? state : ''}
        />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="postalCode">Postal Code</Label>
        <Input
          name="postalCode"
          id="postalCode"
          ref={register}
          required
          defaultValue={postalCode ? postalCode : ''}
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

export default StepFour;
