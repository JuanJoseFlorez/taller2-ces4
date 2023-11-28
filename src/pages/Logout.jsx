import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { ParqueaderoContext } from "../context/ParqueaderoContext";
import { NavLink, useNavigate } from "react-router-dom/dist";

const Logout = () => {
  const { handlerLogout, isLogin } = useContext(ParqueaderoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);
  return (
    <>
      <h1>Cerrar sesion</h1>
      <NavLink to="/">
        <Button onClick={handlerLogout} variant="outlined">
          Cerrar Sesion
        </Button>
      </NavLink>
    </>
  );
};

export default Logout;
