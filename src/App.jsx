import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './Components/auth/FormLogin';
import Citas from './Components/citas/Citas';
import Cita from './Components/citas/Cita';
import NuevaCita from './Components/citas/NuevaCita';
import RutaPrivada from "./Components/routes/PrivateRoute";

import CitasState from './Context/Citas/CitasState';
import AuthState from './Context/auth/authState';


function App() {

  return (
    <AuthState>
      <CitasState>
        <BrowserRouter>
          <Routes>
            
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<Citas />} />
            <Route path="/cita/:id" element={<Cita />} />
            <Route path='/crear-cita' element={<Cita crear={true}/>} /> */}

            <Route path="/" element={
              <RutaPrivada>
                <Citas />
              </RutaPrivada>
              } />
            <Route path="/crear-cita" element={
              <RutaPrivada>
                <NuevaCita />
              </RutaPrivada>
              } />
            <Route path="/cita/:id" element={
              <RutaPrivada>
                <Cita />
              </RutaPrivada>
              } />

          </Routes>
        </BrowserRouter>
      </CitasState>
    </AuthState>

  )
}

export default App
