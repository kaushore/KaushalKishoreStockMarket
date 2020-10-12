import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../Models/company';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {
  company : Company = <Company>{};

  constructor(
    private router : Router,
    private service : AdminService
  ) { }

  ngOnInit(): void {
  }

  AddCompany()
  {
    this.service.AddCompany(this.company);
    this.router.navigateByUrl('admin-home-page');
  }

}
