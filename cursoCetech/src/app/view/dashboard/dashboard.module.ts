import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelesComponent } from './hoteles/hoteles.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HotelesComponent]
})
export class DashboardModule { }
