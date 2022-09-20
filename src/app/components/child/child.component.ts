import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyFirstService } from 'src/app/services/my-first.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  number = 'this is the default value';

  // employees: any[];
  constructor(private service123: MyFirstService) {
    // this.employees = [
    //   { name: 'Richard', department: 'IT' },
    //   { name: 'Someone', department: 'CS' },
    //   { name: 'SomeOther', department: 'EEE' },
    //   { name: 'Pradeep', department: 'ECE' },
    //   { name: 'Richard 2', department: 'BIOTECH' },
    // ];
    this.service123.MyFunction()
    .subscribe(
      {
        next: (e) => {
          console.log('inside subscribe');
          this.number = e;
        },
        error: () => {
          console.log('inside error');
        }
      });
    // .subscribe(() => {
    //   console.log('inside subscribe');
    // });
    // setInterval(() => {
    // this.employees.push({ name:'repeat', department: 'EE'})
    // }, 5000);
  }

  ngOnInit(): void {
  }
}
