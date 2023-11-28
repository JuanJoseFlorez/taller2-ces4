import React, { useContext, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { ParqueaderoContext } from "../../context/ParqueaderoContext";

const Ingreso = ({ element }) => {
  const { celdasCarro, celdasMoto, handlerCeldasMoto, handlerCeldasCarro } =
    useContext(ParqueaderoContext);
    const [campo, setCampo] = useState("")
  const handlerCampo = (e) => {
    let campo = e.target.value;
    setCampo(campo);
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
      setCampo("");
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
      setCampo("");
    }
  };
  return (
    <>
      <Box sx={{ minWidth: 90 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Celda</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Celda"
            defaultValue={""}
            value={campo}
            onChange={handlerCampo}
          >
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
        </FormControl>
      </Box>
    </>
  );
};

export default Ingreso;
