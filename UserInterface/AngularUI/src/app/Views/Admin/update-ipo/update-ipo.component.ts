import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from '../../../Models/ipo';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  ipo : Ipo = <Ipo>{};

  constructor(
    private router : Router,
    private service : AdminService
  ) { }

  ngOnInit(): void {
  }

  AddNewIpo()
  {
    this.service.AddIpo(this.ipo);
    this.router.navigateByUrl('admin-home-page');
  }

}
