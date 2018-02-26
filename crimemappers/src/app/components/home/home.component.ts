import { Component,ElementRef, NgZone , ViewChild ,OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import {Complaint} from '../../model/complaint';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public policestations : any;
  public username:String;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public crimes : Complaint[];
  //lat: number = 51.678418;
 // lng: number = 7.809007;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ,
    private userService : UserService
  ) {

    navigator.geolocation.getCurrentPosition(Position=>{
      this.latitude = Position.coords.latitude;
      this.longitude = Position.coords.longitude;
      //this.local = new location(Position.coords.latitude,Position.coords.longitude);
      this.username = localStorage.getItem('username');
    });
  }

  dragEnded(event){
   // var location = event.coords;
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
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
  setLocation(place){
    /*this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();*/
  }
  ngOnInit() {

    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
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
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 0;
        });
      });
    });
    this.userService.getCrimes().subscribe
    ((posts)=>{
      this.crimes = posts;
      console.log(posts);
    });
    this.userService.getPoliceStation().subscribe
    ((posts)=>{
      this.policestations = posts;
      console.log(posts);
    });
  }

}
