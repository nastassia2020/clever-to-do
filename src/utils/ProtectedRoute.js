import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  // const { isAuth } = useSelector(state => state.auth);
  const token = localStorage.getItem('token');
  console.log('from protected route  ', token);
  return token ? <Outlet /> : <Navigate to="/sign" />;
};

export default ProtectedRoute;
