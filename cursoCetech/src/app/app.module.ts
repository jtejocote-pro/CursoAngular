import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './view/dashboard/dashboard.module';
import { ClientesModule } from './view/clientes/clientes.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HotelesDasboardComponent } from './view/dashboard/hoteles-dashboard/hoteles-dashboard.component';
import { HotelesModule } from './view/hoteles/hoteles.module';

const route: Routes = [
  {
    path: '',
    loadChildren: './view/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'dashboard_hoteles',
    loadChildren: './view/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'clientesRegistro',
    loadChildren: './view/clientes/clientes.module#ClientesModule'
  },
  {
    path: 'registroHotel',
    loadChildren: './view/hoteles/hoteles.module#HotelesModule'
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
    HttpClientModule,
    HotelesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
