import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: "root"
})
export class UserService {

  uuid: string;
  constructor(private httpCliente: HttpClient) {

    this.uuid = uuidv4();

    console.log('uuid', this.uuid);


    // const myObservable = of (1,2,3);

    // const myObserver = {
    //   next: (x: any)=> console.log('observe next value: ' + x) ,
    //   error: (err: any)=> console.log('error', err),
    //   complete: ()=> console.log('complete ')
    // };

    // myObservable.subscribe(myObserver);


  }

  find(): Observable<any> {
    let url = `${environment.api}/user/find?pageSize=20`;
    return this.httpCliente.get(url, {});

  }

  create(user: User): Observable<any> {
    let url = `${environment.api}/user`;
    return this.httpCliente.post(url, user);
  }

  findById(id: number): Observable<User> {
    let url = `${environment.api}/user/${id}`;

    return this.httpCliente.get<User>(url);
  }
}
