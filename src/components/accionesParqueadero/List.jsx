import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ParqueaderoContext } from "../../context/ParqueaderoContext";
import Actions from "./Actions";

const List = ({ element }) => {
  const { celdasCarro, celdasMoto, handlerCeldasMoto, handlerCeldasCarro } =
    useContext(ParqueaderoContext);

  if (element === null) {
    return (
      <Card sx={{ width: 275, height: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Vacio
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Cedula: 
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Placa: 
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Marca: 
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const handlerCampo = (e) => {
    let campo = e.target.value;
    if (element.cilindraje) {
      let celdas = [...celdasMoto];
      const indiceAnterior = celdas.findIndex(
        (valor) =>
          valor &&
          valor.placa === element.placa &&
          valor.cedula === element.cedula
      );
      if (indiceAnterior !== -1) {
        celdas[indiceAnterior] = null;
      }
      celdas[campo] = element;
      handlerCeldasMoto(celdas);
    } else {
      let celdas = [...celdasCarro];
      const indiceAnterior = celdas.findIndex(
        (valor) =>
          valor &&
          valor.placa === element.placa &&
          valor.cedula === element.cedula
      );
      if (indiceAnterior !== -1) {
        celdas[indiceAnterior] = null;
      }
      celdas[campo] = element;
      handlerCeldasCarro(celdas);
    }
  };

  const getCelda = () => {
    let index;
    if (element.cilindraje) {
      index = celdasMoto.findIndex(
        (valor) =>
          valor &&
          valor.placa === element.placa &&
          valor.cedula === element.cedula
      );
    } else {
      index = celdasCarro.findIndex(
        (valor) =>
          valor &&
          valor.placa === element.placa &&
          valor.cedula === element.cedula
      );
    }
    return index;
  };

  return (
    <>
      <Card sx={{ width: 275, height: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {element.cilindraje ? "Moto" : "Carro"}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Cedula: {element.cedula}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Placa: {element.placa}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Marca: {element.marca}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {element.cilindraje ? (
              <div>Cilindraje: {element.cilindraje}</div>
            ) : (
              <div>Modelo: {element.modelo}</div>
            )}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Celda actual: {getCelda() !== -1 ? getCelda() + 1 : "Sin asignar"}
          </Typography>
          <Actions element={element} getCelda={getCelda} />
        </CardContent>
        {/* <CardActions>
          <h3>Asignar o cambiar celda: </h3>
          <Select
            defaultValue={""}
            onChange={handlerCampo}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {element.cilindraje
              ? celdasMoto.map((elemento, index) =>
                  elemento === null || elemento === undefined ? (
                    <MenuItem key={index} value={index}>
                      {index + 1}
                    </MenuItem>
                  ) : (
                    <MenuItem disabled key={index} value={index}>
                      {index + 1}
                    </MenuItem>
                  )
                )
              : celdasCarro.map((elemento, index) =>
                  elemento === null || elemento === undefined ? (
                    <MenuItem key={index} value={index}>
                      {index + 1}
                    </MenuItem>
                  ) : (
                    <MenuItem disabled key={index} value={index}>
                      {index + 1}
                    </MenuItem>
                  )
                )}
          </Select>
        </CardActions> */}
      </Card>
    </>
  );
};

export default List;
