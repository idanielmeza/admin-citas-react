import Navbar from './Navbar';
import {Fragment, useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CitasContext from '../../Context/Citas/citasContext';

const Cita = () => {

    const citasContext = useContext(CitasContext);
    const {eliminarCita, cita:actual, actualizarCita} = citasContext;
    
    const navigate = useNavigate();

    const [cita, setCita] = useState({});

    const handleChange = e => {

        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });


    }

    const handleSubmit = e => {
            e.preventDefault();

            actualizarCita(cita);
            navigate('/');
    }

    useEffect(() => {

        if(actual) setCita(actual);

    } , []);

    return ( 

        <Fragment>

            <Navbar/>

            <form className="row g-3 container mx-auto mt-3"
               onSubmit={handleSubmit}
            >
                <div className="col-md-6">
                    <label className="form-label">Nombre del Paciente</label>
                    <input type="text" name='nombre' className="form-control"
                        value={cita.nombre}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Telefono de Contacto</label>
                    <input type="number" className="form-control" name='numero'
                        value={cita.numero}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telfono de Contacto 2 (opcional)</label>
                    <input type="number" name='numero2' className="form-control"
                        value={cita.numero2}
                        onChange={handleChange}

                    />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Correo (opcional)</label>
                    <input type="email" className="form-control"  name='email'
                        value={cita.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Fecha</label>
                    <input type="date" name='fecha' className="form-control" 
                        value={`${cita.fecha}`.substring(0,10)}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Hora</label>
                    <input type="time" className="form-control" name='hora'
                        value={cita.hora}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className="">
                    <label className="form-label">Hospital</label>
                    <input type="text" className="form-control" name='hospital'
                        value={cita.hospital}
                        onChange={handleChange}
                        required={true}
                    />
                </div>

                <div className="form-group">
                    <label className='center'>Informacion Adicional (opcional)</label>
                    <textarea className="form-control" rows="4" name='informacion'
                        value={cita.informacion}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>

                <div className="col-12 d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type='button' className="btn btn-danger mx-2"
                        onClick={() => {
                            eliminarCita(cita._id);
                            navigate('/');
                        }}
                    >Eliminar</button>
                </div>

            </form>

        </Fragment>

        

     );
}
 
export default Cita;