import Card from '@/components/card';
import Container from '@/components/container';
import Header from '@/components/header';
import { ProfileForm } from '@/components/profileForm';
import React from 'react';

const Profile = async () => {
  return (
    <>
      <Header title="Profile" />
      <Container className="py-6">
        <Card>
          <ProfileForm />
        </Card>
      </Container>
    </>
  );
};

export default Profile;
