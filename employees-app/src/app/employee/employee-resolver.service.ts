import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Employee} from './employee.model';
import {Observable} from 'rxjs';
import {EmployeeService} from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<Employee>{

  constructor(private employees: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee>{
    return this.employees.getById(route.params.id);
  }
}
