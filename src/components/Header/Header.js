import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SlLogout } from 'react-icons/sl';
import {
  logoutHandler,
  clearTasksWhenLogOut,
  firstLoadHandler,
} from '../../store/actions/actions';
import './Header.css';

const Header = () => {
  //const { isAuth } = useSelector(state => state.auth);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authHandler = () => {
    navigate('/sign');
    dispatch(logoutHandler());
    dispatch(clearTasksWhenLogOut());
    dispatch(firstLoadHandler(true));
  };

  return (
    <div className="header">
      <div className="header_info">
        <p> Tassker </p>
      </div>
      {token && <SlLogout className="header_exit" onClick={authHandler} />}
    </div>
  );
};

export default Header;
