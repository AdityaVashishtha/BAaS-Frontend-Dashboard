import { Injectable,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'

@Injectable()
export class AuthService {

  public userChangeEvent: EventEmitter<any> = new EventEmitter();
  authToken: any;
  user: any;

  constructor(private http: HttpClient, private httpOld: Http) { }
  
  authenticateUser(user){
    let headers= new HttpHeaders();
    let loginEndPoint = "http://localhost:4000/dashboard/auth/login";
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

  getUserProfile() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    return user;
  }
  
  changePassword(updateQuery) {
    //console.log(updateQuery);
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.httpOld.post('http://localhost:4000/dashboard/auth/changePassword',updateQuery,{headers: headers}).map(res => res.json());
  }

  updateProfile(updateQuery) {
    //Updating user info
    let user = {};
    user = this.getUserProfile();
    user["displayName"] = updateQuery.displayName;
    user["avatar"] = updateQuery.avatar;
    localStorage.setItem('user',JSON.stringify(user));
    //console.log(user);
    this.userChangeEvent.emit(user);
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.httpOld.post('http://localhost:4000/dashboard/auth/updateProfile',updateQuery,{headers: headers}).map(res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
