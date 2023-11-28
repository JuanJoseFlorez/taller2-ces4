import React, { useContext, useEffect, useState } from "react";
import { ParqueaderoContext } from "../context/ParqueaderoContext";
import { useNavigate } from "react-router-dom";
import Search from "../components/accionesParqueadero/Search";
import List from "../components/accionesParqueadero/List";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const IngresoParqueadero = () => {
  const navigate = useNavigate();
  const { isLogin, celdasCarro, celdasMoto } = useContext(ParqueaderoContext);
  const [finds, setFinds] = useState([]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Ingreso / Salida
      </Typography>
      <Search setFinds={setFinds} finds={finds} />
      <Grid container spacing={2}>
        {finds.map((element, index) => (
          <Grid item xs={3}>
            <List key={index} element={element} />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Divider variant="middle" />
      <br />
      <br />
      <Typography variant="h3" gutterBottom>
        Celdas moto
      </Typography>
      <Grid container spacing={2}>
        {celdasMoto.map((element, index) => (
          <Grid item xs={3}>
            <List key={index} element={element} />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Typography variant="h3" gutterBottom>
        Celdas carro
      </Typography>
      <Grid container spacing={2}>
        {celdasCarro.map((element, index) => (
          <Grid item xs={3}>
            <List key={index} element={element} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default IngresoParqueadero;
