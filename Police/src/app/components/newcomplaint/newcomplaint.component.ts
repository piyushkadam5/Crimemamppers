import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
@Component({
  selector: 'app-newcomplaint',
  templateUrl: './newcomplaint.component.html',
  styleUrls: ['./newcomplaint.component.css']
})
export class NewcomplaintComponent implements OnInit {

  public complaints : any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getCrimes().subscribe((crimes)=>{
      this.complaints = crimes;  
      console.log(crimes);
      console.log(this.complaints);
    });
  }
  takeover(crimea:any){
    crimea.area = localStorage.getItem('username');
    crimea.landline = localStorage.getItem('landline');
    console.log(crimea);
    this.userService.UpdateCrime(crimea._id,crimea)
    .subscribe((crime)=>{
      console.log(crime);
    });
  }
}
