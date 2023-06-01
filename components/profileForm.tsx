'use client';
import React, { useEffect, useState } from 'react';
import TextInput from './inputs/text-input';
import { useSession } from 'next-auth/react';
import { useUpdateUser } from '@/grahql-hook/mutation/updateUser';
import { Button } from './button/button';

export const ProfileForm = () => {
  const { data: session, update } = useSession();
  const [form, setForm] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { isLoading, mutate: updateUser } = useUpdateUser();

  useEffect(() => {
    console.log('session', session);
    setForm({
      ...form,
      firstName: session?.user?.firstName || '',
      lastName: session?.user?.lastName || '',
      email: session?.user?.email || '',
    });
  }, [session]);

  function handleChange(val: string, name: string) {
    setForm({ ...form, [name]: val });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (session?.user) {
      console.log(form);
      updateUser(
        {
          ...form,
          userID: session?.user.id,
        },
        {
          onSuccess(data, variables, context) {
            update(data?.updateUser);
            console.log({ data });
            alert('Success');
          },
          onError() {
            alert('Error');
          },
        },
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <TextInput
                id="firstName"
                label="First name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-3">
              <TextInput
                id="lastName"
                label="Last name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-full">
              <TextInput
                id="email"
                label="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-full">
              <TextInput
                id="password"
                label="Password"
                value={form?.password || ''}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button disabled={isLoading} type="submit" size="lg">
          Save
        </Button>
      </div>
    </form>
  );
};
