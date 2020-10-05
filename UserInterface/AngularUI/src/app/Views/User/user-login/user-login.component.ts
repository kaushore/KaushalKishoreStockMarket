import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';
import { AccountService } from '../../../Services/account.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user : User = <User>{};

  constructor(
    private router : Router,
    private service : AccountService
    ) { }

  ngOnInit(): void {
  }

  ValidateUserLogin(){
    this.service.Authenticate(this.user)
    .subscribe(Response=>{
      localStorage.setItem("session", JSON.stringify(Response));
      this.router.navigateByUrl("user-home-page");
    });
  }  

  SignupUser(){    
    this.router.navigateByUrl("user-signup");
  }

}
