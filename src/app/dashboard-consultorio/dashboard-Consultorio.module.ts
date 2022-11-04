import { RegisterEmpleadoModule } from './register-empleado/register-empleado.module';
import { DashboardConsultorioComponent } from './dashboard-consultorio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardConsultorioRoutingModule } from './dashboard-Consultorio-routing.module';
import { RegisterEmpleadoComponent } from './register-empleado/register-empleado.component';



@NgModule({
  declarations: [DashboardConsultorioComponent],
  imports: [
    CommonModule,
    DashboardConsultorioRoutingModule,
    RegisterEmpleadoModule
  ]
})
export class DashboardConsultorioModule { }
