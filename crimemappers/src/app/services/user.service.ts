import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Login } from '../model/login';
import { Signup } from '../model/signup';
import { Complaint } from '../model/complaint';
import 'rxjs/add/operator/map';
import { httpFactory } from '@angular/http/src/http_module';
@Injectable()
export class UserService {

  constructor(private http:Http) {  
    console.log('data service connected');
  }
  getCrimes(){
    return this.http.get('crime/crime')
    .map(res => res.json());
  }
  getUsers(){
    return this.http.get('user/user')
    .map(res=>res.json());
  }
  getPoliceStation(){
    return this.http.get('police/police')
    .map(res=>res.json());
  }
  getVerfied(login:Login){
    return this.http.post('user/login',
    login).map(res=>res.json());
  }
  addComplaint(complaint:Complaint){
    return this.http.post('crime/crime',complaint)
    .map((res)=>res.json());
  }
  createUser(signup:Signup){
    return this.http.post('user/signup',signup).
    map((res)=>res.json());
  }
}
