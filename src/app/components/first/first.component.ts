import { Component, OnInit } from '@angular/core';
import { MyFirstService } from 'src/app/services/my-first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  inputNumber: number;

  isCheckboxChecked: boolean;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private service: MyFirstService) {
    this.inputNumber = 0;
    this.isCheckboxChecked = false;
    service.MyFunction().subscribe((e) => {
      console.log('inside parent subscribe function',e);

    });
  }

  ngOnInit(): void {

  }
}
