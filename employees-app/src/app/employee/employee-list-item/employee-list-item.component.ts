import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../employee.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {
  @Input() employee: Employee;
  @Output() remove = new EventEmitter<Employee>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToEdit() {
    this.router.navigate(['new', this.employee.id]);
  }
}
