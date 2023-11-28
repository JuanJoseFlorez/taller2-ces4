import React, { useContext } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { ParqueaderoContext } from "../../context/ParqueaderoContext";

const Salida = ({ element }) => {
  const { celdasCarro, celdasMoto, handlerCeldasMoto, handlerCeldasCarro } =
    useContext(ParqueaderoContext);
  const handleSalida = () => {
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
      handlerCeldasCarro(celdas);
    }
  };
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ width: 90 }}>
        <Button
          onClick={handleSalida}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Salida
        </Button>
      </Stack>
    </>
  );
};

export default Salida;
