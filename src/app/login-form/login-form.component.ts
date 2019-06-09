import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET } from "@angular/router";

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

  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.position='top';
    this.mode = 'over';
    this.showBackdrop = true;
    this.logIn = true;
  }

  login(){
    if(this.username == 'basith' && this.password == 'basith'){
      this.router.navigate(['/'])
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

}
