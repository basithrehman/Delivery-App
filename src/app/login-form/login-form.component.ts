import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";
import { LocalStorageService } from '../local-storage.service'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: any;
  password:any;
  opened: boolean = false;
  showBackdrop: boolean = true;
  mode: any;
  position:any;
  logIn: boolean;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.position='top';
    this.mode = 'over';
    this.showBackdrop = true;
    var ls = this.localStorageService.getLocalStorage();
    if(ls && ls.login){
      this.logIn= true;
    }
    // console.log(this.localStorageService.getLocalStorage());
  }

  login(){
    if(this.username == 'basith' && this.password == 'basith'){
      this.logIn = true;
      var ls = this.localStorageService.storeOnLocalStorage(this.logIn);
      if(ls && ls.login){
        this.logIn = true;
      } else {
        this.logIn = false;
      }
      this.router.navigate(['/'])
      this.opened = false;
    }
  }
 
  _toggleSidebar() {
    this.opened = !this.opened;
    this.mode = 'slide';
    this.position = 'top';
    this.showBackdrop = true;
  }

  stopBD(e){    
    e.stopPropagation();
    e.preventDefault();
  }

  closeBD(){
    this.opened = false;
  }

  drop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  logOut(){
    this.logIn = false;
    this.localStorageService.storeOnLocalStorage(false);
    document.getElementById("myDropdown").classList.toggle("show");
  }

  register(){
    window.location.href="/register"
  }
}
