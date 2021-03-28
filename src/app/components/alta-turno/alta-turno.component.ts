import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatCalendarCellClassFunction } from '@angular/material/datepicker'
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-alta-turno',
  templateUrl: './alta-turno.component.html',
  styleUrls: ['./alta-turno.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class AltaTurnoComponent implements OnInit {
  fechas = [
    { day: 3, turnosdisponibles: 'disponible' },
    { day: 4, turnosdisponibles: 'no disponible' },
    { day: 5, turnosdisponibles: 'casi lleno' }
  ]
  isOptional = true
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  constructor(private _formBuilder: FormBuilder) {}
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    let state = ''
    if (view === 'month') {
      const month = cellDate.getMonth()
      if (month === new Date().getMonth()) {
        const date = cellDate.getDate()

        let dayturno = this.fechas.find(({ day }) => day == date) // esto nos ayudara a indicarle al usuario cual dia se encuentra disponible
        if (dayturno) { // leer es importante !!!!!!!!!!!!!!!!!!
          switch (dayturno.turnosdisponibles) {
            case 'disponible':
              return 'Available-days'
            case 'no disponible':
              return 'not-available'
            case 'casi lleno':
              return 'few-shifts'
            default:
          }
        }
        // esta a modo de prueba pero hay que mejorarlo.
      }
      // Highlight the 1st and 20th day of each month.
    }

    return state
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl : ['', Validators.required]
    })
  }
}
