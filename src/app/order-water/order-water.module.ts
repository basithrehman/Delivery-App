// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// routes & components
import { routes } from './order-water.routes';
import { OrderWaterComponent } from './order-water.component';
import {BreadcrumbModule} from 'angular-crumbs';

@NgModule({
  imports: [
    CommonModule,
   
    RouterModule.forChild(routes),
    BreadcrumbModule

    // Material

  ],
 
  providers:[
   
  ],
  declarations: [OrderWaterComponent],
  exports: [ OrderWaterComponent ]
})
export class OrderWaterModule {
}
