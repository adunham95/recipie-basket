import React from 'react';

export const Avatar = ({
  primaryColor = '#6c9976',
  secondaryColor = '#a8c3ae',
}: {
  primaryColor?: string;
  secondaryColor?: string;
}) => {
  return (
    <div
      className="p-2 rounded-full text-white"
      style={{
        background: `linear-gradient(135deg, 
          ${primaryColor}, 
          ${secondaryColor})`,
      }}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        ></path>
      </svg>
    </div>
  );
};
