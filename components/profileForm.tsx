'use client';
import React, { useEffect, useState } from 'react';
import TextInput from './inputs/text-input';
import { useSession } from 'next-auth/react';
import { useUpdateUser } from '@/grahql-hook/mutation/updateUser';

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

            {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <svg
                  className="h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div> 
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          disabled={isLoading}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};
