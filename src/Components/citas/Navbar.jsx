import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../Context/auth/authContext';

const Navbar = () => {
    
    const authContext = useContext(AuthContext);
    const {cerrarSesion} = authContext;

    const logut = () =>{
        console.log('cerrando sesion')
        cerrarSesion();
    }

    return (

        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Bienvenido Dr Felipe Castillo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/crear-cita'} className="nav-link">Crear Cita</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger"
                        onClick={logut}
                        >Cerrar Sesion</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

      );
}
 
export default Navbar;