import { Component, OnInit, ElementRef, NgZone , ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaint } from '../../model/complaint';
import { Login } from '../../model/login';
import {UserService} from '../../services/user.service';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  complaint :Complaint;
  login : Login;

  @ViewChild("search")
  public searchElementRef:ElementRef;

  constructor(private router:Router,private mapsAPILoad:MapsAPILoader,
  private ngZone:NgZone,private userService:UserService) { 
    this.login = new Login("","");
    this.complaint = new Complaint("sasda","","","","",{latitude:12,longitude:213});
    navigator.geolocation.getCurrentPosition(Position=>{
      this.complaint.location.latitude = Position.coords.latitude;
      this.complaint.location.longitude = Position.coords.longitude;
      //this.local = new location(Position.coords.latitude,Position.coords.longitude);
      
    });
  }
  dragEnded(event){
    // var location = event.coords;
     this.complaint.location.latitude = event.coords.lat;
     this.complaint.location.longitude = event.coords.lng;
     /*const geocoder = new google.maps.Geocoder();
     geocoder.geocode({'location':event.coords},(res,status)=>{
       if(status === google.maps.GeocoderStatus.OK 
       && res.length){
         this.ngZone.run(()=>{
           this.setLocation(res[0]);
         });
       }
     });*/
   }
   onSubmit(){
    console.log(this.complaint);
    this.complaint.user_id = localStorage.getItem('username');
    console.log(this.complaint);
     this.userService.addComplaint(this.complaint)
     .subscribe((message)=>{
       if(message.message=='filedcomplaint'){
         this.router.navigateByUrl('/home');
       }
     });
   }
  ngOnInit() {
    this.zoom = 4;
    this.complaint.location.latitude = 39.8282;
    this.complaint.location.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoad.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.complaint.location.latitude = place.geometry.location.lat();
          this.complaint.location.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

} 