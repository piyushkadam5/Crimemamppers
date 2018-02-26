import { Component, OnInit, ElementRef } from '@angular/core';
import {UserService} from '../../service/user.service';

import { element } from 'protractor';
@Component({
  selector: 'app-ongoingcomplaint',
  templateUrl: './ongoingcomplaint.component.html',
  styleUrls: ['./ongoingcomplaint.component.css']
})
export class OngoingcomplaintComponent implements OnInit {
  public width1 :number;
  public stages :number;
  public complaints : any;
  public area : string;
  public labelfor :string;
  public chage : string;
  constructor(private userService:UserService,private ele:ElementRef) {
    this.area = localStorage.getItem('username');
    this.stages = 1;
    this.width1 = 0;
    this.chage = '';
    this.labelfor = "Forward Case";
   }

  ngOnInit() {
    this.userService.getCrimes().subscribe((crimes)=>{
      this.complaints = crimes;  
      console.log(crimes);
      console.log(this.complaints);
    });
  }
  
  stageclicked(crimea:any){
    if(crimea.widthp==null){
      crimea.widthp=20;
      this.userService.UpdateCrime(crimea._id,crimea)
      .subscribe((crime)=>{
        console.log(crime);
      });
    }else if(crimea.widthp<100){
      crimea.widthp+=20;
      this.userService.UpdateCrime(crimea._id,crimea)
      .subscribe((crime)=>{
        console.log(crime);
      });
    }
  }
}
