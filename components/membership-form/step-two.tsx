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
  previousMembershipNumber: string;
  firstName: string;
  lastName: string;
  age: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  previousMembershipNumberSecondary: string;
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
        previousMembershipNumber: data.previousMembershipNumber,
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
        previousMembershipNumber: data.previousMembershipNumberSecondary,
        firstName: data.firstNameSecondary,
        lastName: data.lastNameSecondary,
        age: data.ageSecondary,
        dateOfBirth: dateOfBirthSecondary,
      };
    }

    action(formatted);
    setStep(3);
  };

  const {
    previousMembershipNumber,
    firstName,
    lastName,
    age,
    dateOfBirth,
  } = state.data.primaryApplicant;
  const [dobMonth, dobDay, dobYear] = dateOfBirth.split('/');

  const {
    previousMembership: previousMembershipNumberSecondary,
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
    <Box mb={5}>
      <motion.form
        key={step}
        variants={formAnimate}
        transition={formSpring}
        initial="initial"
        animate="animate"
        exit="exit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 sx={{ variant: 'headings.h3' }}>Member Info</h2>
        <FieldContainer>
          <Label htmlFor="previousMembershipNumber">
            Previous Membership Number
          </Label>
          <Input
            name="previousMembershipNumber"
            id="previousMembershipNumber"
            placeholder="Your previous membership number, if you have one"
            ref={register}
            defaultValue={
              previousMembershipNumber ? previousMembershipNumber : ''
            }
          />
        </FieldContainer>
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
                placeholder="MM"
                required
                defaultValue={dobMonth ? dobMonth : ''}
              />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="dobDay">Day</Label>
              <Input
                name="dobDay"
                id="dobDay"
                placeholder="DD"
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
                placeholder="YYYY"
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
              <Label htmlFor="previousMembershipNumberSecondary">
                Previous Membership Number
              </Label>
              <Input
                name="previousMembershipNumberSecondary"
                id="previousMembershipNumberSecondary"
                placeholder="Your previous membership number, if you have one"
                ref={register}
                defaultValue={
                  previousMembershipNumberSecondary
                    ? previousMembershipNumberSecondary
                    : ''
                }
              />
            </FieldContainer>
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
                    placeholder="MM"
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
                    placeholder="DD"
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
                    placeholder="YYYY"
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
      </motion.form>
    </Box>
  );
};

export default StepTwo;
