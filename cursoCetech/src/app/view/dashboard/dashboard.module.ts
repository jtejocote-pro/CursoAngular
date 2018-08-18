import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { HotelesDasboardComponent } from './hoteles-dashboard/hoteles-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HotelesDasboardComponent]
})
export class DashboardModule { }
