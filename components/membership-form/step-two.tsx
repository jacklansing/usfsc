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
  firstName: string;
  lastName: string;
  age: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  firstNameSecondary: string;
  lastNameSecondary: string;
  ageSecondary: string;
  dobDaySecondary: string;
  dobMonthSecondary: string;
  dobYearSecondary: string;
}

const StepTwo: React.FC<Props> = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const applicationType = state.data.membershipType || 'individual-80';

  if (step !== 2) {
    return null;
  }

  const onSubmit = (data: IFormInput) => {
    const { dobMonth, dobDay, dobYear } = data;
    const dateOfBirth = `${dobMonth}/${dobDay}/${dobYear}`;
    const formatted = {
      primaryApplicant: {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        dateOfBirth,
      },
    };

    if (data.firstNameSecondary) {
      const { dobMonthSecondary, dobDaySecondary, dobYearSecondary } = data;
      const dateOfBirthSecondary = `${dobMonthSecondary}/${dobDaySecondary}/${dobYearSecondary}`;
      //@ts-ignore
      formatted.secondaryApplicant = {
        firstName: data.firstNameSecondary,
        lastName: data.lastNameSecondary,
        age: data.ageSecondary,
        dateOfBirth: dateOfBirthSecondary,
      };
    }

    action(formatted);
    setStep(3);
  };

  const { firstName, lastName, age, dateOfBirth } = state.data.primaryApplicant;
  const [dobMonth, dobDay, dobYear] = dateOfBirth.split('/');

  const {
    firstNameSecondary,
    lastNameSecondary,
    ageSecondary,
    dateOfBirthSecondary,
  } = state.data.primaryApplicant;

  const [
    dobMonthSecondary,
    dobDaySecondary,
    dobYearSecondary,
  ] = dateOfBirth.split('/');

  return (
    <div>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          name="firstName"
          id="firstName"
          ref={register}
          required
          defaultValue={firstName ? firstName : ''}
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          name="lastName"
          id="lastName"
          ref={register}
          required
          defaultValue={lastName ? lastName : ''}
        />
        <Label htmlFor="age">Age</Label>
        <Input
          name="age"
          id="age"
          ref={register}
          required
          defaultValue={age ? age : ''}
        />
        <fieldset
          sx={{
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            mt: 4,
            '& input': {
              mr: 3,
            },
          }}
        >
          <legend>Date of Birth</legend>
          <Label htmlFor="dobMonth">Month</Label>
          <Input
            name="dobMonth"
            id="dobMonth"
            ref={register}
            required
            defaultValue={dobMonth ? dobMonth : ''}
          />
          <Label htmlFor="dobDay">Day</Label>
          <Input
            name="dobDay"
            id="dobDay"
            ref={register}
            required
            defaultValue={dobDay ? dobDay : ''}
          />
          <Label htmlFor="dobYear">Year</Label>
          <Input
            name="dobYear"
            id="dobYear"
            ref={register}
            required
            defaultValue={dobYear ? dobYear : ''}
          />
        </fieldset>
        {applicationType !== 'family-100' ? null : (
          <div>
            <Label htmlFor="firstNameSecondary">First Name</Label>
            <Input
              name="firstNameSecondary"
              id="firstNameSecondary"
              ref={register}
              required
              defaultValue={firstNameSecondary ? firstNameSecondary : ''}
            />
            <Label htmlFor="lastNameSecondary">Last Name</Label>
            <Input
              name="lastNameSecondary"
              id="lastNameSecondary"
              ref={register}
              required
              defaultValue={lastNameSecondary ? lastNameSecondary : ''}
            />
            <Label htmlFor="ageSecondary">Age</Label>
            <Input
              name="ageSecondary"
              id="ageSecondary"
              ref={register}
              required
              defaultValue={ageSecondary ? ageSecondary : ''}
            />
            <fieldset
              sx={{
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                mt: 4,
                '& input': {
                  mr: 3,
                },
              }}
            >
              <legend>Date of Birth</legend>
              <Label htmlFor="dobMonthSecondary">Month</Label>
              <Input
                name="dobMonthSecondary"
                id="dobMonthSecondary"
                ref={register}
                required
                defaultValue={dobMonthSecondary ? dobMonthSecondary : ''}
              />
              <Label htmlFor="dobDaySecondary">Day</Label>
              <Input
                name="dobDaySecondary"
                id="dobDaySecondary"
                ref={register}
                required
                defaultValue={dobDaySecondary ? dobDaySecondary : ''}
              />
              <Label htmlFor="dobYearSecondary">Year</Label>
              <Input
                name="dobYearSecondary"
                id="dobYearSecondary"
                ref={register}
                required
                defaultValue={dobYearSecondary ? dobYearSecondary : ''}
              />
            </fieldset>
          </div>
        )}
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
    </div>
  );
};

export default StepTwo;
