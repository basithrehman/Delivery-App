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
import { AboutComponent } from './about/about.component';
import { RegisterFormComponent } from './register-form/register-form.component'
import { HttpClientModule } from '@angular/common/http';
import { ExplicitOrderpageComponent } from './explicit-orderpage/explicit-orderpage.component';
import { WaterProductsComponent } from './water-products/water-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketingComponent } from './marketing/marketing.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { FranchiseComponent } from './franchise/franchise.component';
import { ConstructionComponent } from './construction/construction.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PremiumBottlesPageComponent,
    GoogleMapsComponent,
    LoginFormComponent,
    NavBarComponent,
    AboutComponent,
    RegisterFormComponent,
    ExplicitOrderpageComponent,
    WaterProductsComponent,
    DashboardComponent,
    MarketingComponent,
    FranchiseComponent,
    ConstructionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    OrderWaterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot(),
    StorageServiceModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDViU_Bs52neXGNKc4lXA_AG3lct5SABQ'
    }),
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
