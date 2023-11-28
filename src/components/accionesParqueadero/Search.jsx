import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { ParqueaderoContext } from "../../context/ParqueaderoContext";

const Search = ({ setFinds, finds }) => {
  const { registroCarro, registroMoto } = useContext(ParqueaderoContext);
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("Cedula");
  const handleSubmit = (e) => {
    e.preventDefault();
    let findCarro, findMoto;
    if (tipo === "Cedula") {
      findCarro = registroCarro.filter(
        (element) => element.cedula === search
      );
      findMoto = registroMoto.filter(
        (element) => element.cedula === search
      );      
    } else {
      findCarro = registroCarro.filter(
        (element) => element.placa === search
      );
      findMoto = registroMoto.filter(
        (element) => element.placa === search
      );
    }
    setFinds([...findCarro, ...findMoto]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 0, width: "50ch" },
            m: 1,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-search"
            label="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
          />
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ marginLeft: 1 }}
          >
            <MenuItem value="Cedula">Cedula</MenuItem>
            <MenuItem value="Placa">Placa</MenuItem>
          </Select>
          <Button type="submit" sx={{ marginLeft: 1 }} variant="contained">
            Buscar
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Search;
