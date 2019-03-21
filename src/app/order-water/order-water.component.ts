import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}


@Component({
  selector: 'app-order-water',
  templateUrl: './order-water.component.html',
  styleUrls: ['./order-water.component.css']
})
export class OrderWaterComponent implements OnInit {

  crumb:any; 
  mapready = false;
  public breadcrumbs: IBreadcrumb[];
  constructor(   private activatedRoute: ActivatedRoute,
    private router: Router ) {
      this.breadcrumbs = [];

      this.router.events
      .filter((event) => event instanceof (NavigationEnd || NavigationStart))
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.crumb = event['breadcrumb'];
        ;
      });

    this.mapready

    ;
     }

  ngOnInit() {
    this.crumb='Type';
  }

  navigate1(){
    this.crumb='Quantity';
  }

  navigate2(){
    this.crumb='Adress'
  }

  navigate3(){
    this.crumb='Price'
  }

}
