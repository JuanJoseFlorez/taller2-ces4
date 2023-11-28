import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ParqueaderoContext } from "../context/ParqueaderoContext";
import SelectType from "../components/registroVehiculos/SelectType";
import FormMoto from "../components/registroVehiculos/FormMoto";
import FormCarro from "../components/registroVehiculos/FormCarro";
import Button from "@mui/material/Button";
import FormPlaca from "../components/registroVehiculos/FormPlaca";
import Alert from "@mui/material/Alert";

const RegistroVehiculos = () => {
  const navigate = useNavigate();
  const {
    isLogin,
    registroCarro,
    registroMoto,
    handleRegistroMoto,
    handleRegistroCarro,
  } = useContext(ParqueaderoContext);
  const [tipoVehiculo, setTipoVehiculo] = useState("Moto");
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [modelo, setModelo] = useState("");
  const [cedula, setCedula] = useState("");
  const [status, setStatus] = useState("")
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (tipoVehiculo === "Moto") {
      let find = registroMoto.filter(
        (element) => element.placa === placa || element.cedula === cedula
      );
      if (find.length === 0) {
        handleRegistroMoto(cedula, placa, marca, cilindraje);
        setStatus("creado")
      }else{
        setStatus("error")
      }
    } else if (tipoVehiculo === "Carro") {
      let find = registroCarro.filter(
        (element) => element.placa === placa || element.cedula === cedula
      );
      if (find.length === 0) {
        handleRegistroCarro(cedula, placa, marca, modelo);
        setStatus("creado")
      }else{
        setStatus("error")
      }
    }
  };
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);
  return (
    <>
      {status === "error" ? <Alert severity="error">Ya existe un registro con esa placa o cedula</Alert> : ""}
      {status === "creado" ? <Alert severity="success">Registro exitoso</Alert> : ""}
      <h1>Registro Vehiculos</h1>
      <form onSubmit={handlerSubmit}>
        <SelectType
          tipoVehiculo={tipoVehiculo}
          setTipoVehiculo={setTipoVehiculo}
          setPlaca={setPlaca}
          setMarca={setMarca}
        />
        <FormPlaca
          placa={placa}
          setPlaca={setPlaca}
          cedula={cedula}
          setCedula={setCedula}
        />
        {tipoVehiculo === "Moto" ? (
          <FormMoto
            setCilindraje={setCilindraje}
            cilindraje={cilindraje}
            marca={marca}
            setMarca={setMarca}
          />
        ) : (
          <FormCarro
            setModelo={setModelo}
            modelo={modelo}
            marca={marca}
            setMarca={setMarca}
          />
        )}
        <br />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </>
  );
};

export default RegistroVehiculos;
