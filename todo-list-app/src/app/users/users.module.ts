import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';

let routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: ':id', component: UsersDetailsComponent }
    ]
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }
}
