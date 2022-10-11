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

}
