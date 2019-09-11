import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {

  empForm: FormGroup;
  employee: Employee;

  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const {employee} = route.snapshot.data;
    if (employee) {
      this.employee = employee;
    }

    this.createForm(employee || {});
  }

  private createForm(emp) {
    this.empForm = this.fb.group({
      firstName: [emp.firstName || '', Validators.required],
      lastName: [emp.lastName || '', Validators.required]
    });

  }

  saveEmployee() {
    if (this.employee) {
      const emp = {
        ...this.employee,
        ...this.empForm.value
      };
      this.employeesService.update(emp)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    } else {
      this.employeesService.create(this.empForm.value)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}
