import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = { userName: '', password: '' };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.model.userName, this.model.password)
      .subscribe(
        {
          next: (res: any) => {
            console.log('res', res);
            if(res.userName!='' && res.password!=''){
              this.router.navigate(['home', {}]);
            }
              
            else{
              alert("No tiene información");
            }
          },
          error: (err: any) => console.error(err),
          complete: () => { }
        });
  }

}
