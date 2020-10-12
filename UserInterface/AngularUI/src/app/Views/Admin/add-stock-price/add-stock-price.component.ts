import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockPrice } from '../../../Models/stock-price';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {
  stockPrice : StockPrice = <StockPrice>{};

  constructor(
    private router : Router,
    private service : AdminService
    ) { }

  ngOnInit(): void {
  }

  AddStockPrice()
  {
    this.service.AddStockPrice(this.stockPrice);
    this.router.navigateByUrl('admin-home-page');
  }

}