import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ParqueaderoContext } from '../context/ParqueaderoContext';

const VisualizacionCeldas = () => {
  const navigate = useNavigate();
  const {isLogin} = useContext(ParqueaderoContext)
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);
  return (
    <div>VisualizacionCeldas</div>
  )
}

export default VisualizacionCeldas