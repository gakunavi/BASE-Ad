import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth/signin', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthGuard;
