import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [UserService]
})
export class RegisterFormComponent implements OnInit {

  constructor(private toastr: ToastrService, public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res =>{
        if(res){
          this.toastr.success('Your Account Is Registered. Please Continue By Logging In', 'Successful',{
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

}
