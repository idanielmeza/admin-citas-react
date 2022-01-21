import {useState, useContext, useEffect} from 'react';
import AuthContext from '../../Context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const authContext = useContext(AuthContext);
    const {login, autenticado} = authContext;

    const navigate = useNavigate();

    useEffect(()=>{
        if(autenticado){
            navigate('/');
        }
    },[autenticado])


    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault();
        login(usuario);
    }

    return ( 
        <div className="container mt-5 mx-auto">
            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label  className="form-label">E-mail</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" name='email'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Contrasena</label>
                    <input type="password" className="form-control" name='password'
                        onChange={handleChange}
                    />
                </div>
                <div className='d-flex flex-row-reverse'>
                    <button type="submit" className="btn btn-primary">Conectar</button>
                </div>
                
            </form>
        </div>
        
     );
}
 
export default Login;