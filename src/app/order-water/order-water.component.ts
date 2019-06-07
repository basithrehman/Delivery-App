import { Component,Directive, OnInit, ViewChild, enableProdMode,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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

  @ViewChild('nw') er: ElementRef;
  crumb:any; 
  mapready = false;
  normalWaterBack:any;
  normalWater:any;
  roWater:any;
  droWater:any;
  troWater:any;

  street:any;
  city:any;
  state:any;
  zip:any;
  country:any;
  county:any;

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
    this.normalWater=0;
    this.roWater=0;
    this.droWater=0;
    this.troWater=0;

  //   $(document).ready(function(){
  //     $('.add').click(function () {
  //       if ($(this).prev().val() < 10) {
  //         $(this).prev().val(+$(this).prev().val() + 1);
  //         let val = $(this).prev().val();
           
  //       }
  //   });
  //   $('.sub').click(function () {
  //       if ($(this).next().val() > 1) {
  //         if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  //       }
  //   });
  // });

  this.crumb='Type';
 
  }

  changeNWadd() {
    this.normalWater = this.normalWater + 1;
    // this.normalWater = this.er.nativeElement.value;
    console.log(this.normalWater)
  }

  changeNWsub() {
    this.normalWater = this.normalWater - 1;
    console.log(this.normalWater)
  }

  changeROadd() {
    this.roWater = this.roWater + 1;
    // this.normalWater = this.er.nativeElement.value;
  }

  changeROsub() {
    this.roWater = this.roWater - 1;
  }

  changeDROadd() {
    this.droWater = this.droWater + 1;
    // this.normalWater = this.er.nativeElement.value;
  }

  changeDROsub() {
    this.droWater = this.droWater - 1;
  }

  changeTROadd() {
    this.troWater = this.troWater + 1;
    // this.normalWater = this.er.nativeElement.value;
  }

  changeTROsub() {
    this.troWater = this.troWater - 1;
  }

  
  

  navigate0(){
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

  // onChange(newValue) {
  //   console.log(newValue);
  //   this.normalWaterBack = newValue;
  // }

}
