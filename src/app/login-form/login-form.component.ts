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
  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    
  }

  login(){
    if(this.username == 'basith' && this.password == 'basith'){
      this.router.navigate(['/'])
    }
  }

}
