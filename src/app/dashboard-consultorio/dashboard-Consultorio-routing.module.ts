import { DashboardConsultorioComponent } from './dashboard-consultorio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardConsultorioComponent, children: [
      {
        path: 'dashboardConsultorio',
        loadChildren: () => import('./dashboard-Consultorio.module').then(mod => mod.DashboardConsultorioModule)
      },
      {
        path: 'registrar-empleado',
        loadChildren: () => import('./register-empleado/register-empleado.module').then(mod => mod.RegisterEmpleadoModule)
      },
      {path: '', redirectTo: '/dashboardConsultorio', pathMatch: 'full'},
      {path: '**', redirectTo: '/dashboardConsultorio', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardConsultorioRoutingModule { }
