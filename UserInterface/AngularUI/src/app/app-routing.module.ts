import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './Views/home-page/home-page.component';

import { UserHomePageComponent } from './Views/User/user-home-page/user-home-page.component';
import { UserLoginComponent } from './Views/User/user-login/user-login.component';
import { UserSignUpComponent } from './Views/User/user-sign-up/user-sign-up.component';

import { AdminHomePageComponent } from './Views/Admin/admin-home-page/admin-home-page.component';
import { AdminLoginComponent } from './Views/Admin/admin-login/admin-login.component';
import { UpdateIpoComponent} from './Views/Admin/update-ipo/update-ipo.component';
import { AddStockPriceComponent } from './Views/Admin/add-stock-price/add-stock-price.component';


const routes: Routes = [
  { path: 'home-page', component: HomePageComponent},

  { path: 'user-home-page', component: UserHomePageComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-signup', component: UserSignUpComponent},

  { path: 'admin-home-page', component: AdminHomePageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'update-ipo', component: UpdateIpoComponent},
  { path: 'add-stock-price', component: AddStockPriceComponent},

  { path: '', redirectTo: 'home-page', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
