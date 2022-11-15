import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  closeResult: string = ''
  userModal: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (response) => {
          console.log(JSON.stringify(response));
        }
      })
    this.userModal = document.getElementById('myModal')

  }

  open() {
    this.userModal.show();
  }

  saveSomeThing(user: any) {
    this.userService.addNewUser(user)
      .subscribe({
        next: (response) => {
          this.userModal.hide();
        },
        error: (response) => {
          console.log('error adding user: ' + JSON.stringify(response));
        }
      })
  }
}
