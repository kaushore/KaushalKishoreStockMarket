import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';
import { AccountService } from '../../../Services/account.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  user : User = <User>{};
  isUsed : boolean = false;
  output : any;

  constructor(
    private router : Router,
    private service : AccountService
    ) { }

  ngOnInit(): void {
  }

  AddNewUser(){
    //console.log(this.user);
    this.service.CreateAccount(this.user).subscribe();
    this.router.navigateByUrl("user-login");
  }

}
