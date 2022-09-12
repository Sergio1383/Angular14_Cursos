import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  id: number = 0
  model?: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(res => {
        this.id = parseInt(res.get('id')!.toString());
        this.getUser();
      })

  }

  getUser(): void {
    this.spinner.show();
    this.userService.findById(this.id).subscribe(
      {
        next: (res: any) => this.model = res,
        error: (err: any) => console.log(err),
        complete: () => { this.spinner.hide(); }
      }
    )
  }

}
