import {useContext,useEffect} from 'react';
import AuthContext from '../../Context/auth/authContext';
import {Navigate} from 'react-router-dom';

const RutaPrivada = ({children}) => {

    const authContext = useContext(AuthContext);

    const {autenticado, obtenerUsuario, usuario} = authContext;

    useEffect(async()=>{
        if(!usuario){
            await obtenerUsuario();
        }

    },[autenticado])

    return ( 

        !autenticado ?(
            <Navigate to='/login'/>
        ) : (
            children
        ) 

     );
    
}

export default RutaPrivada;