import React,{useContext,useReducer, useEffect} from 'react';

import {clienteAxios, tokenAuth} from '../../config/axios';

import CitasContext from './citasContext';
import CitasReducer from './citasReducer';

const CitasState = props => {

    const initialState = {
        citas: [],
        cita: {},
    }

    const [state, dispatch] = useReducer(CitasReducer, initialState);

    // Obtener las citas del usuario
    const obtenerCitas = async () => {
        try {
            const respuesta = await clienteAxios.get('/citas');
            const citas = respuesta.data;

            dispatch({
                type: 'OBTENER_CITAS',
                payload: citas
            });
        } catch (error) {
            console.log(error.response);
        }
        

    }

    const citasFecha = async (fecha) => {

        try {
            const respuesta = await clienteAxios.get(`/citas/fecha/${fecha}`);
            const citas = respuesta.data;

            dispatch({
                type: 'OBTENER_CITAS',
                payload: citas
            });
        } catch (error) {
            console.log(error.response);
        }
        


    }

    // Obtener una cita por id
    const obtenerCita = async id => {

        try {
            const respuesta = await clienteAxios.get(`/citas/${id}`);
            const cita = respuesta.data;

            console.log(cita);

            dispatch({
                type: 'OBTENER_CITA',
                payload: cita
            });

            return cita;

        } catch (error) {
            console.log(error.response);
        }


    }

    // Crear una cita
    const crearCita = async cita => {

        try {
            await clienteAxios.post('/citas', cita);

            alert('Se ha creado la cita correctamente');

            obtenerCitas();

        } catch (error) {
            console.log(error.response);
        }

    }

    // Eliminar una cita
    const eliminarCita = async id => {

        try {
            await clienteAxios.delete(`/citas/${id}`);

            // dispatch({
            //     type: 'ELIMINAR_CITA',
            //     payload: id
            // });

            obtenerCitas();

            alert('Se ha eliminado la cita correctamente');

        } catch (error) {
            console.log(error);
        }


    }

    // Actualizar una cita
    const actualizarCita = async cita => {

        try {
            const respuesta = await clienteAxios.put(`/citas/${cita._id}`, cita);
            // const citaNueva = respuesta.data;

            // dispatch({
            //     type: 'ACTUALIZAR_CITA',
            //     payload: citaNueva
            // });

            alert('Se ha actualizado la cita correctamente');

            obtenerCitas();

        } catch (error) {
            console.log(error);
        }


    }


    return(
        <CitasContext.Provider
            value={{
                citas: state.citas,
                cita: state.cita,
                fecha: state.fecha,
                obtenerCitas,
                obtenerCita,
                crearCita,
                eliminarCita,
                actualizarCita,
                citasFecha
            }}
        >
            {props.children}
        </CitasContext.Provider>);

}

export default CitasState;