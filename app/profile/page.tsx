import Card from '@/components/card';
import Container from '@/components/container';
import Header from '@/components/header';
import { User } from '@/components/user';
import React from 'react';

const Profile = async () => {
  return (
    <>
      <Header title="Profile" />
      <Container className="pt-6">
        <Card cardTitle="User Profile">
          <User />
        </Card>
      </Container>
    </>
  );
};

export default Profile;
