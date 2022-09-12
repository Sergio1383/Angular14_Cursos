import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoModule } from './to-do/to-do.module';
import { TitleComponent } from './title/title.component';
import { ToastrModule } from 'ngx-toastr';
import { DirectivesModule } from './directives/directives.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // ToDoModule,
    AuthModule,
    // HomeModule,
    // UsersModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
