import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ParqueaderoContext } from "../../context/ParqueaderoContext";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const { isLogin, user } = useContext(ParqueaderoContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Parqueadero
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to="/registro-vehiculos">
              <Button sx={{ color: "#fff" }}>Registro</Button>
            </NavLink>
            <NavLink to="/ingreso-parqueadero">
              <Button sx={{ color: "#fff" }}>Ingreso / Salida</Button>
            </NavLink>
            <NavLink to={isLogin ? "/logout" : "/"}>
              <Button sx={{ color: "#fff" }}>{isLogin ? user : "Login"}</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <br />
    </Box>
  );
};

export default Menu;
