import Card from '@/components/card';
import Header from '@/components/header';
import { User } from '@/components/user';
import React from 'react';

const Profile = async () => {
  return (
    <>
      <Header title="Profile" />
      <div className="p-6">
        <Card cardTitle="User Profile">
          <User />
        </Card>
      </div>
    </>
  );
};

export default Profile;
