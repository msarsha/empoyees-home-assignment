import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../employee.model';
import {map} from 'rxjs/operators';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private route: ActivatedRoute, private employeesService: EmployeeService) {
    route.data.pipe(map(data => data.employees))
      .subscribe((emps) => {
        this.employees = emps;
      });
  }

  ngOnInit() {
  }


  onRemove(emp: Employee) {
    this.employeesService.remove(emp.id).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== emp.id);
    });
  }
}
