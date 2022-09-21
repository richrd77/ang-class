import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss', './temp-mobile.component.scss']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    { name: 'Employee' }
  }

}
