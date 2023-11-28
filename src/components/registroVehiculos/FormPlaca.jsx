import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const FormPlaca = ({ placa, setPlaca, cedula, setCedula }) => {
  const handlePlaca = (event) => {
    setPlaca(event.target.value);
  };
  const handleCedula = (event) => {
    setCedula(event.target.value)
  }
  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { mt: 3, width: "100ch" },
          width: "100ch",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="cedula"
            label="Cedula"
            value={cedula}
            onChange={handleCedula}
          />
        </div>
        <div>
          <TextField
            required
            id="placa"
            label="Placa"
            value={placa}
            onChange={handlePlaca}
          />
        </div>
      </Box>
    </>
  );
};

export default FormPlaca;
