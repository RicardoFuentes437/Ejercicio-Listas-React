import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import { Power, Trash } from 'react-bootstrap-icons';

import '../styles/contacto/contactoStyle.scss'

const ContactoComponent = ({ contacto, eliminar, actualizar }) => {

    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contacto.nombre} is going to unmount`);
        }
    }, [contacto]);

    const estado = (conectado) => {
        let status = '';
        let style = '';

        if(conectado == true){
            status = 'En Linea';
            style = "green";
        }else if(conectado == false){
            status = 'Fuera de Linea';
            style = "red";
        }else{
            console.log('error');
        }

        return (
            <span style={{color: style, fontWeight: "bold" }}>{status}</span>
        );
    }

    return (
        <li>
            <p style={{fontWeight: "bold"}}>{contacto.nombre} {contacto.apellido} ({ estado(contacto.conectado) }) <Power onClick={() => actualizar(contacto)} className='icono'></Power> <Trash onClick={() => eliminar(contacto)} className='icono'></Trash></p>
        </li>
    );

};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    eliminar: PropTypes.func.isRequired,
    actualizar: PropTypes.func.isRequired
};


export default ContactoComponent;
