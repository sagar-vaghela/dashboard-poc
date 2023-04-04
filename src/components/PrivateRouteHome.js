import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRouteHome = ({ Comp }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    isLoggedIn && navigate('/');
  }, [navigate])
  
  return <Comp />
}

export default PrivateRouteHome