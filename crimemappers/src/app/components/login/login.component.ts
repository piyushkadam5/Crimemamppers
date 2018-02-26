import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router';
import{ UserService } from '../../services/user.service';
import { google } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userUrl : string;
  login : Login;
  constructor( private router:Router , private userService:UserService
  ) {
    this.userUrl = 'http://localhost:3000/';
    this.login = new Login("","");
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((posts)=>{
        console.log(posts);
      });
    this.login.username = localStorage.getItem('username');
    console.log(this.login);
  }
  onSubmit(){
   console.log(this.login);
   this.userService.getVerfied(this.login).subscribe((message)=>{
     if(message.message=='goodtogo'){
       
      localStorage.setItem('username',this.login.username);
       this.router.navigateByUrl('/home');
     }
   });
   //this.router.navigateByUrl('/home');
  }

}

