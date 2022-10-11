import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  message: string = '';
  
  constructor(private service: EmployeeService) {
    this.service.ModifyData().subscribe(data => {
      this.message = data;
    });
  }
  
  employee = {name:'pradeep',salary:15000}
}
