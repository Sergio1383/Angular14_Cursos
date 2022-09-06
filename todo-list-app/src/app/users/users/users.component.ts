import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private router: Router) {
    console.log('UsersComponent','constructor');
   }

  ngOnInit(): void {


    this.users.push({ id: 1, name: 'Alfredo' });
    this.users.push({ id: 2, name: 'Carlos' });
  }

  edit(user: User): void {
    this.router.navigate([`/home/users/${user.id}`]);
  }

}
