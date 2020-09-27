import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  Username : string;
  Password : string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ValidateUserLogin(){
    this.router.navigateByUrl("user-home-page");
  }

  SignupUser(){
    this.router.navigateByUrl("user-signup");
  }

}
