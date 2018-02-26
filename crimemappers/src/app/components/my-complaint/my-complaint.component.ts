import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Complaint  } from '../../model/complaint';
@Component({
  selector: 'app-my-complaint',
  templateUrl: './my-complaint.component.html',
  styleUrls: ['./my-complaint.component.css']
})
export class MyComplaintComponent implements OnInit {
public username: String;
public compliant : Complaint[];
  constructor(private userService:UserService) { 
    this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.userService.getCrimes().subscribe((crimes)=>{
      this.compliant = crimes;  
      console.log(crimes);
      console.log(this.compliant);
    });
  }

}
