import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  newUserName: string = '';
  newUserEmail: string = '';
  newUserWebsite: string = '';
  newUserCity: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  SaveNewUser(): void {}

}
