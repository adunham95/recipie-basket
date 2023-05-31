'use client';
import TextInput from '@/components/inputs/text-input';
import { LogoWide } from '@/components/logo';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { LoginButton } from '@/components/authButtons';

//TODO convert to use `createUser` mutation
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      if (!res.ok) {
        setErrorMessage((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: '/' });
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      setErrorMessage(error.message);
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
              label="Name"
              id="name"
              value={formValues.name}
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
                disabled={loading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {loading ? 'Loading...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
