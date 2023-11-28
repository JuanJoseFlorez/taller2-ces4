import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectType = ({ tipoVehiculo, setTipoVehiculo, setPlaca, setMarca }) => {
  const handleChange = (event) => {
    setTipoVehiculo(event.target.value);
    setPlaca("");
    setMarca("");
  };
  return (
    <>
      <Box sx={{ width: "100ch" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipoVehiculo}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="Moto">Moto</MenuItem>
            <MenuItem value="Carro">Carro</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectType;
