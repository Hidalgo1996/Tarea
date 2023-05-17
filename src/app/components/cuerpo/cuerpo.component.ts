import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Personas } from 'src/app/models/personas';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  cedula ="";
  nombre ="";
  apellido ="";
  fechaNacimiento ="";
  listaPersonas: Personas[] = [];
  form: FormGroup;

  ngOnInit(): void{

  }

  agregarPersona():void{
    const personas: Personas = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      estado: true,
    }
    this.listaPersonas.push(personas);
  }
}
