import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  lat:any;
  lng:any;
  constructor() { 
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        console.log("long"+this.lng)
        this.lat = +pos.coords.latitude;
        console.log(this.lat)
      });
    }
   }

  ngOnInit() {
  }

}
