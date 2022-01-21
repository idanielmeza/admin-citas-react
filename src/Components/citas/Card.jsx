import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import CitasContext from '../../Context/Citas/citasContext';

const Card = ({cita}) => {

    const citasContext = useContext(CitasContext);
    const {obtenerCita} = citasContext;
    const navigate = useNavigate();

    const onClick = async() => {
        await obtenerCita(cita.id);
        navigate(`/cita/${cita.id}`);
    }

    
    return ( 

        <div className="card my-2 border-primary">
            <div className="card-body">
                <h5 className="card-title">Hospital: {cita ? cita.hospital : ''}</h5>
                <p className="card-text">Hora : {cita ? cita.hora : ''} hrs</p>
                <p className="card-text">Fecha: {cita ? `${cita.fecha}`.substring(0,10) : ''}</p>
                <p className="card-text">Paciente: {cita ? cita.nombre : ''} </p>
                <div className='d-flex justify-content-end'>

                    <a onClick={onClick} className="btn btn-primary">Ver</a>
                </div>
            </div>
        </div>

     );
}
 
export default Card;