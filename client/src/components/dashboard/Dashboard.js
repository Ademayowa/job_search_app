import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthState';

const Dashboard = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container mt-5'>
      <h2 className='text-center mt-5 mb-4'>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
