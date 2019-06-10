import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PremiumBottlesPageComponent } from './premium-bottles-page/premium-bottles-page.component';

import { BreadcrumbModule } from 'angular-crumbs';
import { OrderWaterModule } from './order-water/order-water.module'
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SidebarModule } from 'ng-sidebar';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PremiumBottlesPageComponent,
    GoogleMapsComponent,
    LoginFormComponent,
    NavBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    OrderWaterModule,
    FormsModule,
    SidebarModule.forRoot(),
    StorageServiceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDViU_Bs52neXGNKc4lXA_AG3lct5SABQ'
    }),
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
