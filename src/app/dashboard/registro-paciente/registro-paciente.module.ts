import { RegistroPacienteComponent } from './registro-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPacienteRoutingModule } from './registro-paciente-routing.module';



@NgModule({
  declarations: [RegistroPacienteComponent],
  imports: [
    CommonModule,
    RegisterPacienteRoutingModule
  ]
})
export class RegistroPacienteModule { }
