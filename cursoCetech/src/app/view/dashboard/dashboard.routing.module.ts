import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelesDasboardComponent } from './hoteles-dashboard/hoteles-dashboard.component';
import { RegistroComponent } from '../clientes/registro/registro.component';

const route: Routes = [
  {
    path: 'hola_dashboard',
    component: HotelesDasboardComponent
  }, {
    path: 'dashboard_hoteles',
    component: HotelesDasboardComponent
  },
  {
    path: 'hola_dashboard/:names/:correo',
    component: RegistroComponent
  },
  {
    path: 'sindatosinurl',
    component: RegistroComponent
  }
];

export const DashboardRoutingModule = RouterModule.forChild(route);
