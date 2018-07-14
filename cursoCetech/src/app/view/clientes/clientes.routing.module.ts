import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const route: Routes=[{
  path:'clientesRegistro',
  component:RegistroComponent
}
];

export const ClientesRoutingModule =RouterModule.forChild(route);
