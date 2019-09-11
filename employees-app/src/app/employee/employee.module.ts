import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeListItemComponent} from './employee-list-item/employee-list-item.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListItemComponent,
    EmployeeCreateComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [EmployeesComponent]
})
export class EmployeeModule {
}
