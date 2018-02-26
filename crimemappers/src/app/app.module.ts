import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddComplaintComponent } from './components/add-complaint/add-complaint.component';
import { MyComplaintComponent } from './components/my-complaint/my-complaint.component';

import { AgmCoreModule } from '@agm/core';
import { SelfdefenceComponent } from './components/selfdefence/selfdefence.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddComplaintComponent,
    MyComplaintComponent,
    SelfdefenceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    AgmCoreModule.forRoot({apiKey:'AIzaSyCkYPwX5vvnnD-D9vdQAw5KvIzUw5-1I6k'
  ,libraries:["places"]}),
  ReactiveFormsModule,
  HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
