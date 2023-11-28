import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const FormMoto = ({ cilindraje, setCilindraje, marca, setMarca }) => {
  const handleCilindraje = (event) => {
    setCilindraje(event.target.value);
  };
  const handleMarca = (event) => {
    setMarca(event.target.value);
  };
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
        <br />
        <div>
          <InputLabel id="demo-simple-select-label">Marca</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={marca}
            label="Marca"
            onChange={handleMarca}
            fullWidth
          >
            <MenuItem value="AKT">AKT</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Pulsar">Pulsar</MenuItem>
            <MenuItem value="Suzuki">Suzuki</MenuItem>
            <MenuItem value="Yamaha">Yamaha</MenuItem>
          </Select>
        </div>
        <br />
        <div>
          <InputLabel id="demo-simple-select-label">Cilindraje</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cilindraje}
            label="Cilindraje"
            onChange={handleCilindraje}
            fullWidth
          >
            <MenuItem value={125}>125cc</MenuItem>
            <MenuItem value={250}>250cc</MenuItem>
            <MenuItem value={300}>300cc</MenuItem>
            <MenuItem value={500}>500cc</MenuItem>
          </Select>
        </div>
      </Box>
    </>
  );
};

export default FormMoto;
