import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})

export class AccountService {

  gateWayUrl : string = "http://localhost:57271";
  path : string = `${this.gateWayUrl}/Account`;

  constructor(private http : HttpClient) { }

  public CreateAccount(user : User)
  {
    return this.http.post(`${this.path}/AddUser`, user);    
  }

  public Authenticate( user : User) : Observable<User>
  {
    return this.http.get<User>(`${this.path}/Validate/${user.Username}/${user.Password}`);
  }

}
