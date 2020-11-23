/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Radio, Box, Button } from 'theme-ui';
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
    <motion.form
      variants={formAnimate}
      transition={formSpring}
      initial="initial"
      animate="animate"
      exit="exit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 sx={{ variant: 'headings.h3' }}>Membership Type</h2>
      <FieldContainer>
        <Label>
          <Radio
            name="membershipType"
            value="individual-80"
            defaultChecked={
              (membershipType === undefined || 'individual-80') as boolean
            }
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
          type="submit"
          variant="contained"
          mt={3}
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

export default StepOne;
