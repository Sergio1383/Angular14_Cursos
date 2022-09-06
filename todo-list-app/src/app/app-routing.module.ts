import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ToDoComponent } from './to-do/to-do/to-do.component';
// import { UsersDetailsComponent } from './users/users-details/users-details.component';
// import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'to-do', component: ToDoComponent },
      // {
      //   path: 'users', component: UsersComponent,
      //   children: [
      //     { path: ':id', component: UsersDetailsComponent }
      //   ]
      // }
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
