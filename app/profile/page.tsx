import Header from '@/components/header';
import { User } from '@/components/user';
import React from 'react';

const Profile = async () => {
  return (
    <>
      <Header title="Profile" />
      <div>
        <User />
      </div>
    </>
  );
};

export default Profile;
