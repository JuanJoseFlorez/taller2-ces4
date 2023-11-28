import React from 'react'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const FormCarro = ({setModelo, modelo, marca, setMarca}) => {
  const handleModelo = (event) => {
    setModelo(event.target.value);
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
            <MenuItem value="Kia">Kia</MenuItem>
            <MenuItem value="Chevrolet">Chevrolet</MenuItem>
            <MenuItem value="Renault">Renault</MenuItem>
            <MenuItem value="Mazda">Mazda</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Hyundai">Hyundai</MenuItem>
          </Select>
        </div>
        <br />
        <div>
          <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={modelo}
            label="Modelo"
            onChange={handleModelo}
            fullWidth
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
          </Select>
        </div>
      </Box>
    </>
  )
}

export default FormCarro