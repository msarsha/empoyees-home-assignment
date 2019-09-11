import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  getAll(): Observable<Employee[]> {
    return this.http
      .get(this.apiUrl)
      .pipe(
        map((res: any[]) => {
          return res.map(eRes => ({
            id: eRes._id,
            ...eRes
          }));
        }),
        catchError(() => {
          this.handleError();
          return of([]);
        })
      );
  }

  remove(id: string): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(() => {
          this.handleError();
          return EMPTY;
        }));
  }

  create(emp: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.apiUrl, emp)
      .pipe(
        catchError(() => {
          this.handleError();
          return EMPTY;
        }));
  }

  getById(id: string): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.apiUrl}/${id}`)
      .pipe(map((eRes: any) => ({
          id: eRes._id,
          ...eRes
        })),
        catchError(() => {
          this.handleError();
          return EMPTY;
        }));
  }

  update(emp: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(`${this.apiUrl}/${emp.id}`, emp)
      .pipe(
        catchError(() => {
          this.handleError();
          return EMPTY;
        }));
  }

  private handleError() {
    this.snackBar.open('Something went wrong', 'Close');
  }
}
