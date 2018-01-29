import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }
  
  authenticateUser(user){
    let headers= new HttpHeaders();
    let loginEndPoint = "http://localhost:4000/dashboard/authenticate";
    headers.set('Content-Type','application/json');
    return this.http.post<any>(loginEndPoint,user,{headers: headers}).map(res => res);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  
  getToken(): string {
    return this.authToken;
  }

  loggedIn() {
    //console.log('Check is it working');
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
