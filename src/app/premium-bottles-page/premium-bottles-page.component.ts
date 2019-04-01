import { Component, OnInit } from '@angular/core';
// import { google } from '@agm/core/services/google-maps-types';
import 'rxjs/add/operator/map';

declare const google: any;

@Component({
  selector: 'app-premium-bottles-page',
  templateUrl: './premium-bottles-page.component.html',
  styleUrls: ['./premium-bottles-page.component.css']
})
export class PremiumBottlesPageComponent implements OnInit {

  lat: number;
  lng: number;
  constructor() {   }



  ngOnInit() {
  //   let geocoder:any = new google.maps.Geocoder;
  //   let latlng = {lat: this.lat, lng: this.lng};
  //   geocoder.geocode({'location': latlng}, (results, status) => {
  //  console.log(results); // read data from here
  //  console.log(status);
// });    
}


  

  

}
