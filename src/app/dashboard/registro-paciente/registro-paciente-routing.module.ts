
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { RegisterEmpleadoComponent } from 'src/app/dashboard-consultorio/register-empleado/register-empleado.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPacienteRoutingModule {
}
