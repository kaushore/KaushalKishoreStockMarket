import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ToUserHomePage(){
    this.router.navigateByUrl("user-home-page");
  }

}
