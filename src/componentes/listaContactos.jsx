import React, { useState } from 'react';
import { Contacto } from '../models/contacto.class';
import ContactoComponent from './contacto';
import ContactoForm from './contactoForm';

import '../styles/lista/listaContStyle.scss';


const ListaContactos = () => {

    const [contactos, setContactos] = useState([]);

    function crearContacto(contacto){
        console.log('Creando contacto: ', contacto);
        const temContactos = [...contactos];
        temContactos.push(contacto);
        setContactos(temContactos);
    }

    function eliminarContacto(contacto){
        console.log('Eliminando contacto: ', contacto);
        const index = contactos.indexOf(contacto);
        const temContactos = [...contactos];
        temContactos.splice(index, 1);
        setContactos(temContactos);
    }

    function actualizarEstado(contacto){
        console.log('Actualizando contacto:', contacto);
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].conectado = !tempContactos[index].conectado;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setContactos(tempContactos);
    }


    const Lista = () => {
        return (
            <ul>
                { contactos.map((contacto, index) => {
                        return (
                            <ContactoComponent
                            key={index}
                            contacto={contacto}
                            crear={crearContacto}
                            eliminar={eliminarContacto}
                            actualizar={actualizarEstado}
                            >
                            </ContactoComponent>
                        )
                    }
                )}
            </ul>
        )
    }

    let contactoTable;

    if(contactos.length > 0){
        contactoTable = <Lista></Lista>
    }else{
        contactoTable = (
        <div>
            <h3>No tienes contactos</h3>
            <h4>Agregar uno</h4>
        </div>
        )
    }


    return (
        <div className='contenido'>
            <h1>Contactos</h1>
            <div className='tabla'>
                {contactoTable}
            </div>
            <ContactoForm add={crearContacto}></ContactoForm>
        </div>
    );
}

export default ListaContactos;
