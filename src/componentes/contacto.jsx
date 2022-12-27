import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import { Trash } from 'react-bootstrap-icons';

import '../styles/contacto/contactoStyle.scss'

const ContactoComponent = ({ contacto, eliminar }) => {

    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contacto.nombre} is going to unmount`);
        }
    }, [contacto]);

    const estado = (conectado) => {
        let status = '';
        let style = '';

        if(conectado == 'true'){
            status = 'En Linea';
            style = "green";
        }else{
            status = 'Fuera de Linea';
            style = "red";
        }
        return (
            <span style={{color: style, fontWeight: "bold" }}>{status}</span>
        );
    }

    return (
        <li>
            <p style={{fontWeight: "bold"}}>{contacto.nombre} {contacto.apellido} ({ estado(contacto.conectado) }) <Trash onClick={() => eliminar(contacto)} className='eliminar-contacto'></Trash></p>
        </li>
    );

};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
