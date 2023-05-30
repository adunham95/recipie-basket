import React from 'react';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav>Nav</nav>
      <div>{children}</div>
    </section>
  );
};

export default Dashboard;
