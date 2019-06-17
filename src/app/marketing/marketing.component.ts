import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

      },
      err => {

      }
    );
  }

}
