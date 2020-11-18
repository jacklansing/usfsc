/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Radio, Box, Button } from 'theme-ui';
import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import updateAction from '../../lib/utils/updateAction';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IFormInput {
  membershipType: string;
}

const StepOne: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action } = useStateMachine(updateAction);
  if (step !== 1) {
    return null;
  }

  const onSubmit = (data: IFormInput) => {
    if (data.membershipType !== 'family-100') {
      action({
        ...data,
        secondaryApplicant: {
          firstName: '',
          lastName: '',
          age: '',
          dateOfBirth: '',
        },
      });
    } else {
      action({ ...data });
    }
    setStep(2);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Radio
          name="membershipType"
          value="individual-80"
          defaultChecked={true}
          ref={register}
        />
        Individual ($80.00)
      </Label>
      <Label>
        <Radio name="membershipType" value="family-100" ref={register} />
        Family ($100.00)
      </Label>
      <Label>
        <Radio name="membershipType" value="introductory-55" ref={register} />
        Introductory ($55.00)
      </Label>
      <Label>
        <Radio name="membershipType" value="professional-70" ref={register} />
        Professional ($70.00)
      </Label>
      <Button type="submit" variant="contained">
        Next
      </Button>
    </Box>
  );
};

export default StepOne;
