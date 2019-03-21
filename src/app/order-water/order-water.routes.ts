// angular
import { Routes } from '@angular/router';

// components
import { OrderWaterComponent } from './order-water.component';

export const routes: Routes = [
  {path: 'water-type', component: OrderWaterComponent,  data: {breadcrumb: 'Type'}, children: [
      {path: 'select-quantity', component: OrderWaterComponent, data: {breadcrumb: 'Quantity'}, children: [
          {path: 'Address', component: OrderWaterComponent, data: {breadcrumb: 'Adress'}, children: [
              {path: 'total-price', component: OrderWaterComponent, data: {breadcrumb: 'Price'}, children: [
                
                  ]
                 }
                ]
              }
            ]
          }
        ]
      },
    //   {path: 'success', component: PostPropertyComponent, data: {breadcrumb: 'Success'}},
    //   {path: 'failure', component: PostPropertyComponent, data: {breadcrumb: 'Failure'}}
    ];
  