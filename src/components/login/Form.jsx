import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Form = ({
  handlerSubmit,
  username,
  setUsername,
  password,
  setPassword,
  error
}) => {
  
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              fullWidth
              id="user"
              label="User"
              value={username}
              error={error ? true : false}
              helperText={error ? "Credenciales incorrectas" : ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              value={password}
              error={error ? true : false}
              helperText={error ? "Credenciales incorrectas" : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button sx={{margin: 1}} type="submit" variant="outlined">
            Send
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Form;
