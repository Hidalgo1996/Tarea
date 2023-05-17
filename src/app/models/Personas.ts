export class Personas {
    cedula: string
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    estado: boolean;

    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: Date, estado: boolean) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.estado = estado;
    }
}