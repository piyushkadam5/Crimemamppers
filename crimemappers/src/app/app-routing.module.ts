import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component' ;
import { SignupComponent } from './components/signup/signup.component' ;
import { HomeComponent } from './components/home/home.component';
import { MyComplaintComponent } from './components/my-complaint/my-complaint.component';
import { AddComplaintComponent } from '../app/components/add-complaint/add-complaint.component';
import {SelfdefenceComponent} from './components/selfdefence/selfdefence.component';

const routes : Routes=[
  {path:'selfdefence',component:SelfdefenceComponent},
  {path:'' ,component :LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'addComplaint',component:AddComplaintComponent},
  {path:'MyComplaint',component:MyComplaintComponent}
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
