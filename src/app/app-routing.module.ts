import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiumBottlesPageComponent} from './premium-bottles-page/premium-bottles-page.component'
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: 'bottled-water-products', component: PremiumBottlesPageComponent },
  { path:'', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
