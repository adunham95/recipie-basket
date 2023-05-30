import React from 'react';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};

export default Dashboard;
