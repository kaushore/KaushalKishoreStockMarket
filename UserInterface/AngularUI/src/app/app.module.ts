import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignUpComponent } from './Views/User/user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './Views/User/user-login/user-login.component';
import { UserHomePageComponent } from './Views/User/user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './Views/Admin/admin-home-page/admin-home-page.component';
import { AdminLoginComponent } from './Views/Admin/admin-login/admin-login.component';
import { HomePageComponent } from './Views/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageCompanyComponent } from './Views/Admin/manage-company/manage-company.component';
import { UpdateIpoComponent } from './Views/Admin/update-ipo/update-ipo.component';
import { AddStockPriceComponent } from './Views/Admin/add-stock-price/add-stock-price.component';

import { AccountService } from './Services/account.service';
import { ViewIpoComponent } from './Views/User/view-ipo/view-ipo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    UserLoginComponent,
    UserHomePageComponent,
    AdminHomePageComponent,
    AdminLoginComponent,
    HomePageComponent,
    ManageCompanyComponent,
    UpdateIpoComponent,
    AddStockPriceComponent,
    ViewIpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
