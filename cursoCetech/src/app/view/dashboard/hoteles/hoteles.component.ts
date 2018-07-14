import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  constructor(private navegator:Router) { }

  ngOnInit() {
  } 

  /* Accion de navegacion*/
  btnAction()
  {
    console.log('Estoy en hoteles component y voy a navegar!');
    this.navegator.navigate(['clientesRegistro']);
  }

}
