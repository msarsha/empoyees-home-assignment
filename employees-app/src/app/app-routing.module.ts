import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './employee/employees/employees.component';
import {EmployeesResolverService} from './employee/employees-resolver.service';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeResolverService} from './employee/employee-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    resolve: {
      employees: EmployeesResolverService
    }
  },
  {
    path: 'new',
    component: EmployeeCreateComponent
  },
  {
    path: 'new/:id',
    component: EmployeeCreateComponent,
    resolve: {
      employee: EmployeeResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
