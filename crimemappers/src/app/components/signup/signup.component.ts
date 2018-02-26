import { Component, OnInit } from '@angular/core';
import { Signup } from '../../model/signup';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup : Signup;
  constructor(private userServive:UserService , private router:Router) {
    this.signup  = new Signup("","","","");
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signup);
    this.userServive.createUser(this.signup).subscribe((message)=>{
      if(message.message === 'Goodtogo'){
        this.router.navigateByUrl('/login');
      }
    });
  }

}
