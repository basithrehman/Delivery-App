import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [UserService]
})
export class RegisterFormComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res =>{},
      err =>{}
    )
  }

}
