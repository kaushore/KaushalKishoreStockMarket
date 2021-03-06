import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  UpdateIPO(){
    this.router.navigateByUrl('update-ipo');
  }

  ManageCompany(){
    this.router.navigateByUrl('manage-company');
  }

  AddStockPrice(){
    this.router.navigateByUrl('add-stock-price');
  }

}
