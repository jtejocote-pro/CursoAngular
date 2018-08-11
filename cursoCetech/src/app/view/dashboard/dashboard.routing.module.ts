import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelesDasboardComponent } from './hoteles-dashboard/hoteles-dashboard.component';

const route: Routes = [{
  path:'',
  component: HotelesDasboardComponent
},{
  path: 'dashboard_hoteles',
  component: HotelesDasboardComponent
}
];

export const DashboardRoutingModule = RouterModule.forChild(route);
