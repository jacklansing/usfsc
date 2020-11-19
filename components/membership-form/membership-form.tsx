import React, { useState } from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { Progress } from 'theme-ui';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import FormReview from './form-review';
import { AnimatePresence } from 'framer-motion';

createStore({
  data: {
    primaryApplicant: {
      firstName: '',
      lastName: '',
      age: '',
      dateOfBirth: '',
    },
    secondaryApplicant: {
      firstName: '',
      lastName: '',
      age: '',
      dateOfBirth: '',
    },
    address: {},
  },
});

interface Props {}

const MembershipForm: React.FC<Props> = ({}) => {
  const [step, setStep] = useState(1);

  return (
    <StateMachineProvider>
      <Progress max={100} value={Math.ceil((step - 1) * 33.33)} mb={4} />
      <AnimatePresence initial={false}>
        <StepOne step={step} setStep={setStep} key={1} />
        <StepTwo step={step} setStep={setStep} key={2} />
        <StepThree step={step} setStep={setStep} key={3} />
        <FormReview step={step} setStep={setStep} key={4} />
      </AnimatePresence>
    </StateMachineProvider>
  );
};

export default MembershipForm;
