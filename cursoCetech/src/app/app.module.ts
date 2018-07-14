import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { DashboardModule } from './view/dashboard/dashboard.module';
import { HotelesComponent } from './view/dashboard/hoteles/hoteles.component';
import { ClientesModule } from './view/clientes/clientes.module';

const route: Routes=[{
  path:'dashboard_hoteles',
  loadChildren:'./view/dashboard/dashboard.module#DashboardModule'
},
{
  path:'clientesRegistro',
  loadChildren:'./view/clientes/clientes.module#ClientesModule'
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
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
