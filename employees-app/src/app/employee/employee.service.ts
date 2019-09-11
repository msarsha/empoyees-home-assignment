import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './employee.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {
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
        }));
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  create(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, emp);
  }

  getById(id: string): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.apiUrl}/${id}`)
      .pipe(map((eRes: any) => ({
        id: eRes._id,
        ...eRes
      })));
  }

  update(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${emp.id}`, emp);
  }
}
