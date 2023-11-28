import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParqueaderoProvider from "./context/ParqueaderoProvider";
import Login from "./pages/Login";
import RegistroVehiculos from "./pages/RegistroVehiculos";
import VisualizacionCeldas from "./pages/VisualizacionCeldas";
import SalidaParqueadero from "./pages/SalidaParqueadero";
import IngresoParqueadero from "./pages/IngresoParqueadero";
import Menu from "./components/menu/Menu";
import Logout from "./pages/Logout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ParqueaderoProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registro-vehiculos" element={< RegistroVehiculos />} />
            <Route
              path="/ingreso-parqueadero"
              element={<IngresoParqueadero />}
            />
          </Routes>
        </ParqueaderoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
