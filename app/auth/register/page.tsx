'use client';
import TextInput from '@/components/inputs/text-input';
import { LogoWide } from '@/components/logo';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { LoginButton } from '@/components/authButtons';
import { useCreateUser } from '@/grahql-hook/mutation/createUser';

//TODO convert to use `createUser` mutation
const Page = () => {
  const { isLoading, mutateAsync: createUser } = useCreateUser();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await createUser(formValues);
      console.log({ user });

      signIn(undefined, { callbackUrl: '/' });
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleChange = (value: string, name: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div className="border-b pb-5">
        <LogoWide className="h-10" />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Already have an account?
          <LoginButton className="ml-1 font-semibold text-primary hover:text-primary-light">
            Login
          </LoginButton>
        </p>
      </div>

      <div className="mt-5">
        <div>
          <form onSubmit={onSubmit} className="space-y-6">
            <TextInput
              label="First Name"
              id="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />

            <TextInput
              label="Last Name"
              id="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />

            <TextInput
              label="Email Address"
              id="email"
              value={formValues.email}
              onChange={handleChange}
            />

            <TextInput
              label="Password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
            />

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {isLoading ? 'Loading...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
