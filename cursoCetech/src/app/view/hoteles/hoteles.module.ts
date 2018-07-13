import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranquisiasComponent } from './franquisias/franquisias.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { HotelesComponent } from './hoteles.component';
import { RegistroComponent } from './franquisias/registro/registro.component';
import { DetallesComponent } from './franquisias/detalles/detalles.component';
import { RegistroSucursalesComponent } from './sucursales/registro-sucursales/registro-sucursales.component';
import { DetalleSucursalComponent } from './sucursales/detalle-sucursal/detalle-sucursal.component';
import { ControlHabitacionesComponent } from './control-habitaciones/control-habitaciones.component';
import { RegistroHabitacionComponent } from './control-habitaciones/registro-habitacion/registro-habitacion.component';
import { DetalleHabitacionComponent } from './control-habitaciones/detalle-habitacion/detalle-habitacion.component';
import { RegistroEstacionamientoComponent } from './estacionamiento/registro-estacionamiento/registro-estacionamiento.component';
import { DetalleEstacionamientoComponent } from './estacionamiento/detalle-estacionamiento/detalle-estacionamiento.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FranquisiasComponent, 
    SucursalesComponent,
    EstacionamientoComponent, HotelesComponent, RegistroComponent, DetallesComponent, RegistroSucursalesComponent, DetalleSucursalComponent, ControlHabitacionesComponent, RegistroHabitacionComponent, DetalleHabitacionComponent, RegistroEstacionamientoComponent, DetalleEstacionamientoComponent]
})
export class HotelesModule { }
