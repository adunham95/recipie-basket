'use client';
import { IToast, useToast } from '@/stores/toast';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ClientOnlyPortal } from '../clientOnlyPortal';

function Toast({ id, style = 'info', title, subTitle }: IToast) {
  const { removeToast } = useToast();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        removeToast(id);
      }, 250);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  function getStyles() {
    switch (style) {
      case 'warning':
        return 'text-amber-400';
      case 'success':
        return 'text-green-400';
      case 'danger':
        return 'text-red-400';
      default:
        return 'text-blue-400';
    }
  }

  function getIcon() {
    switch (style) {
      case 'danger':
      case 'warning':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        );

      case 'success':
        return (
          <svg
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        );
    }
  }

  return (
    <div
      className={twMerge(
        'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 mb-3 transition transform duration-200 text-',
        isOpen
          ? 'translate-x-[300px] opacity-100 sm:translate-x-0'
          : 'translate-x-0 opacity-0 sm:translate-y-0 sm:translate-x-2',
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className={twMerge('flex-shrink-0', getStyles())}>
            {getIcon()}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            {subTitle && (
              <p className="mt-1 text-sm text-gray-500">
                Anyone with a link can now view this file.
              </p>
            )}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                // removeToast(id);
                setIsOpen(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ToastContainer = () => {
  const { toasts } = useToast();
  return (
    <ClientOnlyPortal>
      <div className="absolute z-50 top-[60px] sm:top-0 right-0 p-2 max-w-[300px] w-full">
        {toasts.map((item: IToast) => (
          <Toast key={item.id} {...item} />
        ))}
      </div>
    </ClientOnlyPortal>
  );
};

export { Toast, ToastContainer };
