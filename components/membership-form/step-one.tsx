/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Radio, Box, Button } from 'theme-ui';
import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import updateAction from '../../lib/utils/updateAction';
import FieldContainer from '../utils/field-container';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IFormInput {
  membershipType: string;
}

const StepOne: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
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

  const { membershipType } = state.data;

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 sx={{ variant: 'headings.h3' }}>Membership Type</h2>
      <FieldContainer>
        <Label>
          <Radio
            name="membershipType"
            value="individual-80"
            defaultChecked={membershipType === 'individual-80' || undefined}
            ref={register}
          />
          Individual ($80.00)
        </Label>
      </FieldContainer>
      <FieldContainer>
        <Label>
          <Radio
            name="membershipType"
            value="family-100"
            ref={register}
            defaultChecked={membershipType === 'family-100'}
          />
          Family ($100.00)
        </Label>
      </FieldContainer>
      <FieldContainer>
        <Label>
          <Radio
            name="membershipType"
            value="introductory-55"
            ref={register}
            defaultChecked={membershipType === 'introductory-55'}
          />
          Introductory ($55.00)
        </Label>
      </FieldContainer>
      <FieldContainer>
        <Label>
          <Radio
            name="membershipType"
            value="professional-70"
            ref={register}
            defaultChecked={membershipType === 'professional-70'}
          />
          Professional ($70.00)
        </Label>
      </FieldContainer>
      <Button type="submit" variant="contained" mt={3}>
        Next &rarr;
      </Button>
    </Box>
  );
};

export default StepOne;
