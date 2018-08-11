import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datosDeHotel } from '../../dashboard/hoteles-dashboard/hoteles-dashboard.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string;
  correo: string;

  constructor(private params: ActivatedRoute) { }

  ngOnInit() {
    if (this.params.snapshot.params['names'] !== undefined && this.params.snapshot.params['names'] !== null
  &&  this.params.snapshot.params['correo']!== undefined && this.params.snapshot.params['correo'] !== null){
      this.nombre = this.params.snapshot.params['names'];
      this.correo = this.params.snapshot.params['correo'];
    }
    else {
      this.nombre = datosDeHotel.nombre;
      this.correo = datosDeHotel.correo;
    }
    console.log('Entre a registro');
  }

}
