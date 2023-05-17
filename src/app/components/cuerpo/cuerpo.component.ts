import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/Personas';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  form!: FormGroup;
  cedula ="";
  nombre ="";
  apellido ="";
  fechaNacimiento ="";
  listaPersonas: Personas[] = [];
  

  ngOnInit(): void{
    this.form = new FormGroup({
      cedula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required)
    })
  }
  
  agregarPersona(){
    const personas: Personas = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      estado: true,
    }
    this.listaPersonas.push(personas);
    console.log(personas);
  }
}
