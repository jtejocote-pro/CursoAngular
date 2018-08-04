import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './view/dashboard/dashboard.module';
import { ClientesModule } from './view/clientes/clientes.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HotelesDasboardComponent } from './view/dashboard/hoteles-dashboard/hoteles-dashboard.component';

const route: Routes = [
  {
    path: '',
    component: HotelesDasboardComponent
  },
  {
    path: 'dashboard_hoteles',
    loadChildren: './view/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'clientesRegistro',
    loadChildren: './view/clientes/clientes.module#ClientesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    DashboardModule,
    ClientesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
