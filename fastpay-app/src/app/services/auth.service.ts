import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // public authUser?: User;

  constructor() { }

  login(userName: string, password: string): Observable<User> {

    let result: User = { name: 'Sergio Esperón', userName: 'sergio', password: '123456', email: 'sergioska753@gmail.com' };;

    if(userName!='' && password!='')
    {
      if (userName == 'sergio' && password == '123456') {navigator
        // this.authUser = result;
        sessionStorage.setItem('authUser', JSON.stringify(result));
        return of(result);
      }
    }
    else
      alert('No hay información que procesar');

    return of();

  }
}
