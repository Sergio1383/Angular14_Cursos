import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // if (this.authService.authUser) {
    //   this.model.name = this.authService.authUser.name;
    // }

    if (sessionStorage.getItem('authUser')) {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);
      this.model.name = authUser.name;
    }




  }

  logout(): void {
    this.router.navigate(['auth', {}]);
    sessionStorage.removeItem('authUser');
  }

}
