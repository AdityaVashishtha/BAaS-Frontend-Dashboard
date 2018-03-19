import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class RouteHandlerService {
  private SERVER_ADDRESS = 'http://localhost:4000';// 'http://localhost:4000';
  constructor(
    private http: Http,    
  ) { }

  addRoute(route) {
    //console.log('Inside add route function of route handler service');
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/routehandler/addRoute',route,{headers: headers}).map(res => res.json());
  }
  getRoutesOfSchema(schema) {    
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/routehandler/getRoutes',schema,{headers: headers}).map(res => res.json());
  }
  deleteRoute(route){
    console.log('Inside delete route');
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/routehandler/deleteRoute',route,{headers: headers}).map(res => res.json());
  }
}
