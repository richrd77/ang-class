import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/services/my-service.service';

@Component({
  selector: 'pradeep-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  textInput: string = '';

  constructor(private e: MyService) {
    alert(this.e.GetTwo());
  }

  // step 1:- create Object in js/TS
  // step 2:- [(ngModel)]=""
}
