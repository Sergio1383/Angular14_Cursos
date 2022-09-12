import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

let routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'create', component: UsersCreateComponent },
      { path: ':id', component: UsersDetailsComponent }

    ]
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailsComponent,
    UsersCreateComponent,
    UsersListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }
}
