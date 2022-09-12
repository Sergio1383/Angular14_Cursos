import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  constructor(private router: Router, private userService: UserService, private spinner: NgxSpinnerService) {
    console.log('UsersComponent', 'constructor');
  }

  ngOnInit(): void {
    this.spinner.show();
    this.userService.find()
      .subscribe({
        next: (res: any) => {

          this.users = res.data

          // this.users =

        },
        error: (err: any) => console.log('error', err),
        complete: () => { console.log('complete '); this.spinner.hide(); }
      });
  }

  edit(user: User): void {
    this.router.navigate([`/home/users/${user.id}`]);
  }


}
