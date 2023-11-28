import React from "react";
import Salida from "./Salida";
import Ingreso from "./Ingreso";
import Stack from "@mui/material/Stack";

const Actions = ({element, getCelda}) => {
  return (
    <>
    <Stack direction="row" spacing={2}>
      <Ingreso element={element}/>
      {getCelda() !== -1 ? <Salida element={element}/> : ""}
      {/* <Salida element={element}/> */}
    </Stack>
    </>
  );
};

export default Actions;
