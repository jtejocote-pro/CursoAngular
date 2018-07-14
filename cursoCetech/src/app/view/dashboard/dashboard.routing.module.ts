import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelesComponent } from './hoteles/hoteles.component';

const route: Routes=[{
  path:'dashboard_hoteles',
  component:HotelesComponent
}
];

export const DashboardRoutingModule =RouterModule.forChild(route);
