import React, { useState } from "react";
import { ParqueaderoContext } from "./ParqueaderoContext";

const ParqueaderoProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [registroMoto, setRegistroMoto] = useState([]);
  const [registroCarro, setRegistroCarro] = useState([]);
  const [celdasCarro, setCeldasCarro] = useState(new Array(8).fill(null));
  const [celdasMoto, setCeldasMoto] = useState(new Array(8).fill(null));
  const handlerUser = (user) => {
    setUser(user);
    setIsLogin(true);
  };
  const handlerLogout = () => {
    setUser("");
    setIsLogin(false);
  };
  const handleRegistroMoto = (cedula, placa, marca, cilindraje) => {
    setRegistroMoto([
      ...registroMoto,
      { cedula: cedula, placa: placa, marca: marca, cilindraje: cilindraje },
    ]);
  };
  const handleRegistroCarro = (cedula, placa, marca, modelo) => {
    setRegistroCarro([
      ...registroCarro,
      { cedula: cedula, placa: placa, marca: marca, modelo: modelo },
    ]);
  };
  const handlerCeldasMoto = (element) => {
    setCeldasMoto(element);
  };
  const handlerCeldasCarro = (element) => {
    setCeldasCarro(element);
  };
  return (
    <ParqueaderoContext.Provider
      value={{
        message: "Hola",
        handlerUser,
        user,
        isLogin,
        handlerLogout,
        handleRegistroMoto,
        handleRegistroCarro,
        registroMoto,
        registroCarro,
        handlerCeldasCarro,
        handlerCeldasMoto,
        celdasCarro,
        celdasMoto,
      }}
    >
      {children}
    </ParqueaderoContext.Provider>
  );
};

export default ParqueaderoProvider;
