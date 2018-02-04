import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class ConfigurationService {

  constructor(
    private http: Http
  ) { }

  getApplicationDetails() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/getApplicationDetails',{headers: headers}).map(res => res.json());    
  }

  getAuthenticationConfig() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/getAuthenticationConfig',{headers: headers}).map(res => res.json());
  }

  setAuthenticationConfig(config) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/setAuthenticationConfig',config,{headers: headers}).map(res => res.json());
  }

  getAllLogs() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/logs',{headers: headers}).map(res => res.json());
  }

  getCurUserProfile() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/getUserProfile',{headers: headers}).map(res => res.json());
  }

}
