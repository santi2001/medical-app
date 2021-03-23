import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { TurnosComponent } from './components/turnos/turnos.component';

const routes: Routes = [
  {path :'', redirectTo: '/pacientes' ,pathMatch: 'full'},
  {path: 'pacientes', component : PacientesComponent},
  {path : 'turnos',component : TurnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
