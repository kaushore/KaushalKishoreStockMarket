import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from '../Models/ipo';
import { StockPrice } from '../Models/stock-price';
import { Company } from '../Models/company';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  gateWayUrl : string = "http://localhost:57271";
  path : string = `${this.gateWayUrl}/Admin`;

  constructor(private http : HttpClient) { }

  public AddIpo(ipo : Ipo)
  {
    return this.http.post(`${this.path}/AddIPO`, ipo);    
  }

  public AddStockPrice(stockPrice : StockPrice)
  {
    return this.http.post(`${this.path}/AddStockPrice`, stockPrice)
  }

  public AddCompany(company : Company)
  {
    return this.http.post(`${this.path}/AddCompany`, company)
  }

}
