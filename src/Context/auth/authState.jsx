import React,{useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {clienteAxios, tokenAuth} from '../../config/axios';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('x-token'),
        autenticado: null,
        usuario: null,
        cargando: true,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = async datos =>{

        try {
            const respuesta = await clienteAxios.post('/auth/singin', datos);

            const {token, usuario} = respuesta.data;

            dispatch({
                type: 'LOGIN',
                payload: {
                    token : token
                    ,usuario}
            });

            tokenAuth(token);

        } catch (error) {
            alert('No se pudo iniciar sesion, intentalo de nuevo');
            console.log(error);
        }

    }

    const cerrarSesion = ()=>{

        delete clienteAxios.defaults.headers.common['user-token'];

        localStorage.removeItem('x-token');

        dispatch({
            type: 'LOGOUT'
        })


    }

    const obtenerUsuario = async ()=>{

        try {   

            tokenAuth(localStorage.getItem('x-token'));

            const respuesta = await clienteAxios.get('/auth/usuario');

            dispatch({
                type: 'USUARIO',
                payload: respuesta.data
            });

            localStorage.setItem('x-token', respuesta.data.token);

            tokenAuth(respuesta.data.token);


        } catch (error) {
            
            console.log(error.response);

        }


    }

    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                cargando: state.cargando,
                autenticado: state.autenticado,
                token: state.token,
                login,
                cerrarSesion,
                obtenerUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;