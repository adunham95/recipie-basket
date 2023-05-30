import { Nav } from '@/components/navbar';
import React from 'react';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ProfileLayout;
