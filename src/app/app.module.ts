import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PremiumBottlesPageComponent } from './premium-bottles-page/premium-bottles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PremiumBottlesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
