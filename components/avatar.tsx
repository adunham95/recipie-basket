import React from 'react';

const colors = [
  ['#FF1B6B', '#45CAFF'],
  ['#00FF87', '#60EFFF'],
  ['#ff0f7b', '#f89b29'],
  ['#40c9ff', '#e81cff'],
  ['#595cff', '#c6f8ff'],
  ['#e9d022', '#e60b09'],
  ['#6c9976', '#a8c3ae'],
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const Avatar = () => {
  const [primary, secondary] = getRandomColor();

  return (
    <div
      className="p-2 rounded-full text-white"
      style={{
        background: `linear-gradient(135deg, ${primary}, ${secondary})`,
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
