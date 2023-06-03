import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface IButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'filled' | 'text' | 'outline';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
}

export const Button = (props: IButtonProps) => {
  const {
    type = 'button',
    onClick,
    variant = 'filled',
    size = 'md',
    className = '',
    children,
    disabled = false,
    href,
  } = props;

  function getVariant() {
    switch (variant) {
      case 'filled':
        return 'bg-primary text-white font-semibold shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark';
      case 'outline':
        return 'text-primary border-2 border-primary font-semibold shadow-sm hover:text-white hover:bg-primary-dark hover:border-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark';
      case 'text':
        return 'uppercase text-primary font-semibold hover:bg-primary-light hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark';
      default:
        return '';
    }
  }

  function getSize() {
    switch (size) {
      case 'xs':
        return 'rounded px-2 py-1 rounded text-xs';
      case 'sm':
        return 'rounded px-2 py-1 rounded text-sm';
      case 'md':
        return 'rounded-md px-2.5 py-1.5 text-sm';
      case 'lg':
        return 'rounded-md px-3 py-2 text-sm';
      case 'xl':
        return 'rounded-md px-3.5 py-2.5 text-sm';
      case 'xxl':
        return 'rounded-md px-4 py-3 text-lg';
      default:
        break;
    }
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={twMerge(getVariant(), getSize(), className)}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={twMerge(getVariant(), getSize(), className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={twMerge(getVariant(), getSize(), className)}
    >
      {children}
    </button>
  );
};
