import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [EmployeeService]
})
export class UpdateComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

}