import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class ConfigurationService {
  private SERVER_ADDRESS =  'http://localhost:4000/';//'http://localhost:4000';
  constructor(
    private http: Http
  ) { }


  getUserHitCounts() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/hitCount',{headers: headers}).map(res => res.json());    
  }

  getApplicationDetails() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/utils/getApplicationDetails',{headers: headers}).map(res => res.json());    
  }

  getAuthenticationConfig() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/config/getAuthenticationConfig',{headers: headers}).map(res => res.json());
  }

  setAuthenticationConfig(config) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/config/setAuthenticationConfig',config,{headers: headers}).map(res => res.json());
  }

  getAllLogs() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/utils/logs',{headers: headers}).map(res => res.json());
  }

  getCurUserProfile() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/utils/getUserProfile',{headers: headers}).map(res => res.json());
  }

}
