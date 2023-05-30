'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export function NavLink({
  children,
  href,
  className = '',
  activeClassName = '',
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      {...props}
      className={isActive ? activeClassName : className}
    >
      {children}
    </Link>
  );
}
