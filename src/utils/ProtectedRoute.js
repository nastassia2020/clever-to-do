import { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { isError } = useSelector(state => state.auth);
  const isAuth = !!localStorage.getItem('Auth');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth || isError) {
      navigate('/register');
    }
  }, [isAuth, isError, navigate]);

  return <>{isAuth && !isError ? <Outlet /> : <Navigate replace to="/sign" />}</>;
};

export default ProtectedRoute;
