import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PremiumBottlesPageComponent } from './premium-bottles-page/premium-bottles-page.component';

import { BreadcrumbModule } from 'angular-crumbs';
import { OrderWaterModule } from './order-water/order-water.module'

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
    OrderWaterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
