import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'registro-paciente',
        loadChildren: () => import('./registro-paciente/registro-paciente.module').then(mod => mod.RegistroPacienteModule)
      },
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
