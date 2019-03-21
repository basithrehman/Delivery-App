import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium-bottles-page',
  templateUrl: './premium-bottles-page.component.html',
  styleUrls: ['./premium-bottles-page.component.css']
})
export class PremiumBottlesPageComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
    
  }

}
