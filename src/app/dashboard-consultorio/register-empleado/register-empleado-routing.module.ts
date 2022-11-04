import { RegisterEmpleadoComponent } from './register-empleado.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

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
export class RegisterEmpleadoRoutingModule {
}
