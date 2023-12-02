import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/app/dashboard/analytics" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;
