import Navbar from './Navbar';
import {Fragment, useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CitasContext from '../../Context/Citas/citasContext';

const NuevaCita = () => {

    const citasContext = useContext(CitasContext);
    const {crearCita} = citasContext;

    const [cita, setCita] = useState({});

    const navigate = useNavigate();

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
            
            e.preventDefault();
    
            crearCita(cita);
    
            navigate('/');
    
    }

    return ( 

        <Fragment>

            <Navbar/>

            <form className="row g-3 container mx-auto mt-3"
                onSubmit={handleSubmit}
            >
                <div className="col-md-6">
                    <label className="form-label">Nombre del Paciente</label>
                    <input type="text" name='nombre' className="form-control"
                        
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Telefono de Contacto</label>
                    <input type="number" className="form-control" name='numero'
                        
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telfono de Contacto 2 (opcional)</label>
                    <input type="number" name='numero2' className="form-control"
                        
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Correo (opcional)</label>
                    <input type="email" className="form-control"  name='email'
                        
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Fecha</label>
                    <input type="date" name='fecha' className="form-control" 
                        onChange={handleChange}
                        // value={ cita ? new Date(cita.fecha).toISOString().substring(0,10) : ''}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Hora</label>
                    <input type="time" className="form-control" name='hora'
                        
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label className="form-label">Hospital</label>
                    <input type="text" className="form-control" name='hospital'
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className='center'>Informacion Adicional (opcional)</label>
                    <textarea className="form-control" rows="4" name='informacion'
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-12 d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>

            </form>

        </Fragment>

        

     );
}
 
export default NuevaCita;