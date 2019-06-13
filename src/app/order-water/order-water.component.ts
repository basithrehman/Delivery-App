import { Component,Directive, OnInit, ViewChild, enableProdMode,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { LocalStorageService } from '../local-storage.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Order } from '../shared/order/order.model';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../environments/environment'


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


  


  selectedOrder = {
    type: {
      normalWater: '',
      roWater: '',
      droWater: '',
      troWater: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    },
    payment: '',
    email: ''
 };

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

  payment:any;

  getEmail:any;

  public breadcrumbs: IBreadcrumb[];
  constructor(private LocalStorageService : LocalStorageService , private http:HttpClient, private activatedRoute: ActivatedRoute,
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
    this.payment = 'cod';
    this.getEmail = this.LocalStorageService.getLocalStorage();
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
    this.crumb='Price';
    this.selectedOrder.payment = this.payment;
    this.selectedOrder.type.normalWater = this.normalWater;
    this.selectedOrder.type.roWater = this.roWater;
    this.selectedOrder.type.droWater = this.droWater;
    this.selectedOrder.type.troWater = this.troWater;

    this.selectedOrder.address.street = this.street;
    this.selectedOrder.address.city = this.city;
    this.selectedOrder.address.state = this.state;
    this.selectedOrder.address.zip = this.zip;
    this.selectedOrder.address.country = this.country;
    
    this.selectedOrder.email = this.getEmail.email;


    this.http.post(environment.apiUrl+'/order', this.selectedOrder).subscribe(
      res =>{
        console.log("inside");
      },
      err =>{}
    )}

  // onChange(newValue) {
  //   console.log(newValue);
  //   this.normalWaterBack = newValue;
  // }

}
