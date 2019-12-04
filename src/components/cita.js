import React from 'react';
import PropTypes from 'prop-types';



const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.Mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span>{cita.Propietario}</p>    
            <p className="card-text"><span>Fecha: </span>{cita.Fecha}</p>    
            <p className="card-text"><span>Hora: </span>{cita.Hora}</p>    
            <p className="card-text"><span>Sintomas: </span></p>    
            <p className="card-text">{cita.Sintomas}</p>
            <button
                className="btn btn-danger"
                onClick={() => eliminarCita(cita.id)}
            >Borrar &times;</button>
        </div>
    </div>
);
Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
export default Cita;