import { Component, OnInit, ViewChild,  ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

    @ViewChild('dis') dis: ElementRef;

  market = {
    name: '',
    email: '',
    number: '',
    address: '',
    organisation: '',
    gst: '',
    deposit: '',
  }

  ngOnInit() {
  }

  onSubmit(data){
    this.http.post(environment.apiUrl+'/marketing', data.value).subscribe(
      res => {
        if(res){
          this.toastr.success('Your Response Has Been Recorded. We will Get Back To You Shortly.', 'Successful',{
            positionClass: 'toast-top-center',
            progressBar: true,
            timeOut: 5000
          });
          this.dis.nativeElement.disabled = true;
          this.dis.nativeElement.style.background = "#4caf50b0";
          this.dis.nativeElement.style.cursor = "not-allowed";
        }
      },
      err => {
        if(err){
          this.toastr.error('Our server is down at this moment, please try agin after some time.','Error', {
            positionClass: 'toast-top-center',
            progressBar: true,
            timeOut: 5000
          });
          
        }
      }
    );
  }

}
