import React, { useContext, useState } from "react";
import { ParqueaderoContext } from "../context/ParqueaderoContext";
import Form from "../components/login/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { handlerUser } = useContext(ParqueaderoContext);
  const [username, setUsername] = useState("usuario");
  const [password, setPassword] = useState("contrasena");
  const [user, setUser] = useState({
    "user":"usuario",
    "password":"contrasena"
  })
  const [error, setError] = useState(false)

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(user.user !== username || user.password !== password){
      setError(true)
    }else{
      handlerUser(username);
      navigate("/registro-vehiculos")
    }
  };
  return (
    <>
      <Form
        handlerSubmit={handlerSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        error={error}
      />
    </>
  );
};

export default Login;
