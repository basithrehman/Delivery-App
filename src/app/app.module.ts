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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PremiumBottlesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    OrderWaterModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDViU_Bs52neXGNKc4lXA_AG3lct5SABQ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
