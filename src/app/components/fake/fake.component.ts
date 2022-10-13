import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FakeService } from 'src/app/services/fake.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss'],
  providers: [FakeService]
})
export class FakeComponent implements OnInit {
  users: User[];

  

  constructor(private service: FakeService) {
    this.users = [];

  }

  ngOnInit(): void {
    this.service.GetUsers().subscribe(u => this.users = u);
  }

  SaveNewUser(): void {
    this.service.PostNewUser(new User({
      // name: this.newUserName,
      // username: this.newUserEmail,
      // website: this.newUserWebsite, address: { city: this.newUserCity }
    })).subscribe(response => {
      alert('POST request success with id=' + response);
    });
  }

}
