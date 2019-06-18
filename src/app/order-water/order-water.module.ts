// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// routes & components
import { routes } from './order-water.routes';
import { OrderWaterComponent } from './order-water.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    BreadcrumbModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDViU_Bs52neXGNKc4lXA_AG3lct5SABQ'
    })

    // Material

  ],
 
  providers:[
   
  ],
  declarations: [OrderWaterComponent],
  exports: [ OrderWaterComponent ]
})
export class OrderWaterModule {
}
