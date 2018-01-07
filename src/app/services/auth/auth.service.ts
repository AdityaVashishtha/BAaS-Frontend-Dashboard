import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }
  
  authenticateUser(user){
    let headers= new Headers();
    let loginEndPoint = "http://localhost:4000/dashboard/authenticate";
    headers.append('Content-Type','application/json');
    return this.http.post(loginEndPoint,user,{headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
