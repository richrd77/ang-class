import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pradeep-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public str = 'from TS';

  constructor() { }

  ngOnInit(): void {
  }

  BtnClick() {
    alert('btn clicked');
  }

}
