import Navbar from './Navbar';
import Card from './Card';
import React, {useEffect, useContext} from 'react';
import CitasContext from '../../Context/Citas/citasContext';

const Citas = () => {

    const citasContext = useContext(CitasContext);
    const {citas, obtenerCitas, citasFecha} = citasContext;

    const handleChange = e => {          
        citasFecha(e.target.value);
    }

    useEffect(async() => {

        await obtenerCitas();

    } , [])

    return ( 
        <>
            <Navbar/>

            <div className="container mx-auto mt-5 row">
                <input type='date' className="form-control" placeholder="Fecha"
                    onChange={handleChange}
                 />
                {
                    citas.length ?
                citas.map(cita=>{
                    return(
                        <Card
                            key={cita._id}
                            cita={cita}
                        />
                    )

                })
                : <p className=' text-center p-5 disponibles'>No hay citas</p>
            } 
                
            </div>
            
        </>

     );
}
 
export default Citas;