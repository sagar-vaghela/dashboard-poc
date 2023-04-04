import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRouteLogin = ({ Comp }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    !isLoggedIn && navigate('/login');
  }, [navigate])
  
  return <Comp />
}

export default PrivateRouteLogin