import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { HotelesDasboardComponent } from './hoteles-dashboard/hoteles-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HotelesDasboardComponent]
})
export class DashboardModule { }
