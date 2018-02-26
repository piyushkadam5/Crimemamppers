import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {NewcomplaintComponent} from './components/newcomplaint/newcomplaint.component';
import {OngoingcomplaintComponent} from './components/ongoingcomplaint/ongoingcomplaint.component';
const routes : Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'newcomplaint',component:NewcomplaintComponent},
  {path:'ongoing',component:OngoingcomplaintComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
