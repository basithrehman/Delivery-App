import { Component,Directive, OnInit, ViewChild, enableProdMode,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { LocalStorageService } from '../local-storage.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Order } from '../shared/order/order.model';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';

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

  username: any;
  password:any;
  


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
  logIn: boolean; 
  login: boolean;
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

  position:any;
  _opened: boolean = false;

  public breadcrumbs: IBreadcrumb[];
  constructor(private toastr: ToastrService,private LocalStorageService : LocalStorageService , private http:HttpClient, private activatedRoute: ActivatedRoute,
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
    this.position = 'right'
    this.getEmail = this.LocalStorageService.getLocalStorage();
   
    this.login = this.LocalStorageService.getLocalStorage().login;
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

  ngAfterViewChecked(){
    this.login = this.LocalStorageService.getLocalStorage().login;
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

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  

  navigate0(){
    this.crumb='Type';
  }

  navigate1(){
    this.crumb='Quantity';
  }

  navigate2(){
    this.crumb='Adress';
  }

  loginn(){

    var data = this.http.get(environment.apiUrl + '/get?email='+ this.username).subscribe(
      res =>{ 
        
        if( res[0].email == this.username && res[0].password == this.password){
        console.log(res[0].email, res[0].password)
        this.logIn = true;
        var ls = this.LocalStorageService.storeOnLocalStorage(this.logIn, res[0].email);
        if(ls && ls.login){
              this.logIn = true;
            } else {
              this.logIn = false;
            }
        this._opened = false;    
      }
      
      else if(res[0].error || res[0].email == this.username || res[0].password == this.password ){
        this.toastr.error('Incorrect Username or Password','Error', {
          positionClass: 'toast-top-center',
          progressBar: true,
          timeOut: 5000
        });
      }
     },
      err =>{
        if(err){
          this.toastr.error('Our server is down at this moment, please try agin after some time.','Error', {
            positionClass: 'toast-top-center',
            progressBar: true,
            timeOut: 5000
          });
          
        }
      }
    )
  }

  closeBD(){
    this._opened = false;
  }

  stopBD(e){    
    e.stopPropagation();
    e.preventDefault();
  }

  navigate3(){
    
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
        this.crumb='Price';
        if(res){
          this.toastr.success('Your Order is placed!', 'Successful',{
            positionClass: 'toast-top-center',
            progressBar: true,
            timeOut: 5000
          });
      }        
      },
      err =>{
        if(err){
          this.toastr.error('Our server is down at this moment, please try agin after some time.','Error', {
            positionClass: 'toast-top-center',
            progressBar: true,
            timeOut: 5000
          });
          
        }
      }
    )}

  // onChange(newValue) {
  //   console.log(newValue);
  //   this.normalWaterBack = newValue;
  // }

}
