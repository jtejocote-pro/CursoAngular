import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RegistroComponent } from './registro/registro.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientesComponent, RegistroComponent, DetalleClienteComponent]
})
export class ClientesModule { }
