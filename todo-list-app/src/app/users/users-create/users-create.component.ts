import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {

  model: User = new User();
  constructor(private userService: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.model.phone='00000';
  }

  onSubmit(): void {


    console.log(this.model);

    this.spinner.show();
    this.userService.create(this.model)
      .subscribe({
        next: (res: any) => { console.log(res); },
        error: (err: any) => console.log(err),
        complete: () => { this.spinner.hide(); }
      })



  }

}
