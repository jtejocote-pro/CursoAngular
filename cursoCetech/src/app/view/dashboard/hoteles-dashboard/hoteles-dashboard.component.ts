import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hoteles-dashboard',
  templateUrl: './hoteles-dashboard.component.html',
  styleUrls: ['./hoteles-dashboard.component.css']
})
export class HotelesDasboardComponent implements OnInit {

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
