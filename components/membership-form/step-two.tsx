/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Box, Button, Input } from 'theme-ui';
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
    let formatted = {
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
    firstName: firstNameSecondary,
    lastName: lastNameSecondary,
    age: ageSecondary,
    dateOfBirth: dateOfBirthSecondary,
  } = state.data.secondaryApplicant;

  const [
    dobMonthSecondary,
    dobDaySecondary,
    dobYearSecondary,
  ] = dateOfBirthSecondary.split('/');

  return (
    <Box>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 sx={{ variant: 'headings.h3' }}>Member Info</h2>
        <FieldContainer>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            name="firstName"
            id="firstName"
            ref={register}
            required
            defaultValue={firstName ? firstName : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            name="lastName"
            id="lastName"
            ref={register}
            required
            defaultValue={lastName ? lastName : ''}
          />
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="age">Age</Label>
          <Input
            name="age"
            id="age"
            ref={register}
            required
            defaultValue={age ? age : ''}
          />
        </FieldContainer>
        <fieldset
          sx={{
            border: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <legend>Date of Birth</legend>
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            <FieldContainer>
              <Label htmlFor="dobMonth">Month</Label>
              <Input
                name="dobMonth"
                id="dobMonth"
                ref={register}
                required
                defaultValue={dobMonth ? dobMonth : ''}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="dobDay">Day</Label>
              <Input
                name="dobDay"
                id="dobDay"
                ref={register}
                required
                defaultValue={dobDay ? dobDay : ''}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="dobYear">Year</Label>
              <Input
                name="dobYear"
                id="dobYear"
                ref={register}
                required
                defaultValue={dobYear ? dobYear : ''}
              />
            </FieldContainer>
          </div>
        </fieldset>
        {applicationType !== 'family-100' ? null : (
          <div>
            <h2 sx={{ variant: 'headings.h3' }}>Add'l Member Info</h2>
            <FieldContainer>
              <Label htmlFor="firstNameSecondary">First Name</Label>
              <Input
                name="firstNameSecondary"
                id="firstNameSecondary"
                ref={register}
                required
                defaultValue={firstNameSecondary ? firstNameSecondary : ''}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="lastNameSecondary">Last Name</Label>
              <Input
                name="lastNameSecondary"
                id="lastNameSecondary"
                ref={register}
                required
                defaultValue={lastNameSecondary ? lastNameSecondary : ''}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="ageSecondary">Age</Label>
              <Input
                name="ageSecondary"
                id="ageSecondary"
                ref={register}
                required
                defaultValue={ageSecondary ? ageSecondary : ''}
              />
            </FieldContainer>
            <fieldset
              sx={{
                border: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <legend>Date of Birth</legend>
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                }}
              >
                <FieldContainer>
                  <Label htmlFor="dobMonthSecondary">Month</Label>
                  <Input
                    name="dobMonthSecondary"
                    id="dobMonthSecondary"
                    ref={register}
                    required
                    defaultValue={dobMonthSecondary ? dobMonthSecondary : ''}
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="dobDaySecondary">Day</Label>
                  <Input
                    name="dobDaySecondary"
                    id="dobDaySecondary"
                    ref={register}
                    required
                    defaultValue={dobDaySecondary ? dobDaySecondary : ''}
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="dobYearSecondary">Year</Label>
                  <Input
                    name="dobYearSecondary"
                    id="dobYearSecondary"
                    ref={register}
                    required
                    defaultValue={dobYearSecondary ? dobYearSecondary : ''}
                  />
                </FieldContainer>
              </div>
            </fieldset>
          </div>
        )}
        <div sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setStep(step - 1);
            }}
          >
            &larr; Back
          </Button>
          <Button type="submit" variant="contained">
            Next &rarr;
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default StepTwo;
