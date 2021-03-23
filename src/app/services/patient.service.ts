import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import Patient from '../models/patient'
import { catchError, map, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url: string = '.......'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private _httpClient: HttpClient) {}

  public getPatients(): Observable<Patient[]> {
    return this._httpClient.get(this.url).pipe(
      map((result: any) => {
        let patients = result.content as Array<Patient>
        return patients
      })
    )
  }
  public getPatient(id: number): Observable<Patient> {
    return this._httpClient
      .get(`${this.url}/client ${id}`)
      .pipe(map((response) => response as Patient))
  }
  public editPatient(patientedit: Patient) {
    return this._httpClient
      .put(`${this.url}/edit/${patientedit.id}`, patientedit)
      .pipe(
        map((result: any) => result.patient as Patient),
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e)
          }
          return throwError(e)
        })
      )
  }

  public addPatient(patientnew: Patient): Observable<Patient> {
    return this._httpClient.post<Patient>(this.url, patientnew)
  }

  public deletePatient(id: number): Observable<any> {
    return this._httpClient.delete(`${this.url}/${id}`)
  }
}
