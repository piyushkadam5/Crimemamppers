import { Component, OnInit, ElementRef, NgZone , ViewChild  } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../../model/signup';
import { UserService } from '../../service/user.service';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup : Signup;
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef:ElementRef;

  constructor(private router:Router ,private mapsAPILoad:MapsAPILoader,
    private ngZone:NgZone ,private userServive:UserService ) {
    this.signup  = new Signup("","","",{latitude:18 , longitude:70});
    navigator.geolocation.getCurrentPosition(Position=>{
      this.signup.location.latitude = Position.coords.latitude;
      this.signup.location.longitude = Position.coords.longitude;
    });
   }
   
   dragEnded(event){
    // var location = event.coords;
     this.signup.location.latitude = event.coords.lat;
     this.signup.location.longitude = event.coords.lng;
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

  ngOnInit() {
  
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
          this.signup.location.latitude = place.geometry.location.lat();
          this.signup.location.longitude = place.geometry.location.lng();
        });
      });
    });
  
  }

  onSubmit(){
    console.log(this.signup);
    this.userServive.createPoliceStation(this.signup).subscribe((message)=>{
      if(message.message === 'filedcomplaint'){
        this.router.navigateByUrl('/login');
      }
    });
  }

}
