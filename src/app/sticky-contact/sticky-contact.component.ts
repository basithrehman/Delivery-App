import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sticky-contact',
  templateUrl: './sticky-contact.component.html',
  styleUrls: ['./sticky-contact.component.css']
})
export class StickyContactComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  _opened: boolean;
  position:any;
  animate:any;

  ngOnInit() {
    this.position = 'bottom'
    this.animate = true;
    this._opened = false;
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  post(){
    this.toastr.error('Our server is down at this moment, please try agin after some time.','Error', {
      positionClass: 'toast-top-center',
      progressBar: true,
      timeOut: 5000
    });
  }

}
