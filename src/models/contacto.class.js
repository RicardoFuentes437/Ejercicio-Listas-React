export class Contacto {
    nombre = '';
    apellido = '';
    conectado = false;

    constructor(nombre, apellido, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.conectado = conectado;
    }
}