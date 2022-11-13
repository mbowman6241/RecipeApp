import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  
  //TODO: Remove once DB is created
  users: User[] = [
    {
      id: "212wfasd",
      firstName: "Bob",
      lastName: "Ross",
      email: "happyPlants@paint.com"
    },
    {
      id: "2134t3rgq",
      firstName: "Morgan",
      lastName: "Freeman",
      email: "someActor@hollywood.com"
    },
    {
      id: "124qewfrddh",
      firstName: "Samual",
      lastName: "Jackson",
      email: "SnakesOnaPlane@MotherEffer.com"
    },
    {
      id: "1234ewfra",
      firstName: "Capt",
      lastName: "America",
      email: "Avengers@mcu.com"
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
