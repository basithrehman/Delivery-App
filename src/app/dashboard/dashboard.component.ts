import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { LocalStorageService } from '../local-storage.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http : HttpClient, private LocalStorageService: LocalStorageService) { }

  data:any;
  email:any;

  ngOnInit() {
    this.email = this.LocalStorageService.getLocalStorage();
    this.http.get(environment.apiUrl+ '/dashboard?email='+ this.email.email).subscribe(
      res => {
        console.log('success');
        this.data = res;
      },
      err => {

      }
    )
  }

}
