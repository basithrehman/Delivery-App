import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiumBottlesPageComponent} from './premium-bottles-page/premium-bottles-page.component'
import { HomePageComponent } from './home-page/home-page.component';
import { OrderWaterModule } from './order-water/order-water.module';
import { LoginFormComponent } from './login-form/login-form.component'
import { RegisterFormComponent } from './register-form/register-form.component'
import { ExplicitOrderpageComponent } from './explicit-orderpage/explicit-orderpage.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: 'bottled-water-products', component: PremiumBottlesPageComponent },
  { path:'', component: HomePageComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'order', component: ExplicitOrderpageComponent},
  { path: 'dashboard', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
