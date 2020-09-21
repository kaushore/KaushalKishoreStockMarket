import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Username : string;
  Password : string;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  ValidateAdminLogin() {
    if(this.Username == "Admin" && this.Password == "Pass@word1")
      this.router.navigateByUrl('admin-home-page');
    else
      alert('Invalid Credentials.');
  }

}
