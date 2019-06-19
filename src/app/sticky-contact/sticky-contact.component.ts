import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-sticky-contact',
  templateUrl: './sticky-contact.component.html',
  styleUrls: ['./sticky-contact.component.css']
})
export class StickyContactComponent implements OnInit {

  constructor(private toastr: ToastrService,private http: HttpClient) { }

  _opened: boolean;
  position:any;
  animate:any;

  data = {
    name: '',
    email: '',
    number: '',
    message: ''
  }

  ngOnInit() {
    this.position = 'bottom'
    this.animate = true;
    this._opened = false;
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  post(){
   return this.http.post(environment.apiUrl+'/contact',this.data).subscribe(

    res => {
      this._opened = !this._opened;
      this.toastr.success('Your Response Has Been Recorded. We will Get Back To You Shortly.', 'Successful',{
        positionClass: 'toast-top-center',
        progressBar: true,
        timeOut: 5000
      });

    },

    err => {
      this.toastr.error('Our server is down at this moment, please try agin after some time.','Error', {
        positionClass: 'toast-top-center',
        progressBar: true,
        timeOut: 5000
      });
    }
   );
  }

}
