import { SharedModule } from './../../../shared/shared.module';
import { RegisterEmpleadoComponent } from './register-empleado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { RegisterEmpleadoRoutingModule } from './register-empleado-routing.module';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';



@NgModule({
  declarations: [RegisterEmpleadoComponent, AddEmpleadoComponent],
  imports: [
    CommonModule,
    GridModule,
    SharedModule,
    RegisterEmpleadoRoutingModule
  ]
})
export class RegisterEmpleadoModule { }
