import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Employee} from './employee.model';
import {EmployeeService} from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesResolverService implements Resolve<Employee[]> {
  constructor(private employees: EmployeeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this.employees.getAll();
  }
}
