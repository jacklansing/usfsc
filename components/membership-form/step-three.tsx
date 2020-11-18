/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Box, Button, Input } from 'theme-ui';
import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import updateAction from '../../lib/utils/updateAction';

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

const StepThree: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state: formState } = useStateMachine(updateAction);

  if (step !== 3) {
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
    setStep(4);
  };

  const {
    addressPrimary,
    addressSecondary,
    city,
    state,
    postalCode,
  } = formState.data.address;

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="addressPrimary">Adress Line 1</Label>
      <Input
        name="addressPrimary"
        id="addressPrimary"
        ref={register}
        required
        defaultValue={addressPrimary ? addressPrimary : ''}
      />
      <Label htmlFor="addressSecondary">Adress Line 2</Label>
      <Input
        name="addressSecondary"
        id="addressSecondary"
        ref={register}
        defaultValue={addressSecondary ? addressSecondary : ''}
      />
      <Label htmlFor="city">City</Label>
      <Input
        name="city"
        id="city"
        ref={register}
        required
        defaultValue={city ? city : ''}
      />
      <Label htmlFor="state">State</Label>
      <Input
        name="state"
        id="state"
        ref={register}
        required
        defaultValue={state ? state : ''}
      />
      <Label htmlFor="postalCode">Postal Code</Label>
      <Input
        name="postalCode"
        id="postalCode"
        ref={register}
        required
        defaultValue={postalCode ? postalCode : ''}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          setStep(step - 1);
        }}
      >
        Back
      </Button>
      <Button type="submit" variant="contained">
        Next
      </Button>
    </Box>
  );
};

export default StepThree;
