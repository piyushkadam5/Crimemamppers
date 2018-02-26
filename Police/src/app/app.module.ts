import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

import { AgmCoreModule } from '@agm/core';

import { UserService } from './service/user.service';

import {AppRoutingModule} from './/app-routing.module';
import { NewcomplaintComponent } from './components/newcomplaint/newcomplaint.component';
import { OngoingcomplaintComponent } from './components/ongoingcomplaint/ongoingcomplaint.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NewcomplaintComponent,
    OngoingcomplaintComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCkYPwX5vvnnD-D9vdQAw5KvIzUw5-1I6k'
  ,libraries:["places"]}),
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
