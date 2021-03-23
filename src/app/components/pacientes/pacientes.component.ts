import { Component, OnInit } from '@angular/core'
import Patient from 'src/app/models/patient'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  displayedColumns: string[] = ['dni','name','surname','email','action']
  dataSource: Array<Patient> = new Array<Patient>()
  patientnew : Patient;
  constructor() {

  }

  ngOnInit(): void {
    this.patientnew = new Patient();
    this.patientnew.dni= 43211168
    this.patientnew.email = 'santiagochurquina95@gmail.com'
    this.patientnew.enabled= true
    this.patientnew.id = 1
    this.patientnew.name = 'Santiago'
    this.patientnew.surname = 'Churquina'
    this.patientnew.username = 'santichurquina'
    this.dataSource.push({... this.patientnew});
  }
}
