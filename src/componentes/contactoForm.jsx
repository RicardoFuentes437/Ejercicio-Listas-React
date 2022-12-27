import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

import '../styles/form/formStyle.scss';


const ContactoForm = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const conectadoRef = useRef(false);

    function addContacto(e){
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            conectadoRef.current.value
        );

        add(nuevoContacto);
    }

    return (
        <form onSubmit={addContacto}>
            <div className='nombre-contacto'>
                <label htmlFor="nombreCont">Nombre</label>
                <input type="text" ref={nombreRef} required/>
            </div>
            <div>
                <label htmlFor="apellidoCont">Apellido</label>
                <input type="text" ref={apellidoRef} required/>
            </div>
            <div className="estado-contacto">
                <label htmlFor="selectEstado">Estado</label>
                <select ref={conectadoRef} defaultValue='true' className='estado-select'>
                    <option value="false">
                        Desconectado
                    </option>
                    <option value="true">
                        Conectado
                    </option>
                </select>
            </div>
            <button type='submit'>Crear contacto</button>
        </form>
    );
};


ContactoForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactoForm;
