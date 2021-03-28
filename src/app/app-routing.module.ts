import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaTurnoComponent } from './components/alta-turno/alta-turno.component';
import { FormPacienteComponent } from './components/form-paciente/form-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { TurnosComponent } from './components/turnos/turnos.component';

const routes: Routes = [
  {path :'', redirectTo: 'pacientes' ,pathMatch: 'full'},
  {path: 'pacientes', component : PacientesComponent},
  {path : 'turnos',component : TurnosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'altaTurnos', component: AltaTurnoComponent},
  {path : 'altapaciente', component: FormPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
