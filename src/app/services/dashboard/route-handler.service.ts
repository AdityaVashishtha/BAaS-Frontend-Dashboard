import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class RouteHandlerService {

  constructor(
    private http: Http,    
  ) { }

  addRoute(route) {
    //console.log('Inside add route function of route handler service');
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/addRoute',route,{headers: headers}).map(res => res.json());
  }
  getRoutesOfSchema(schema) {    
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/getRoutes',schema,{headers: headers}).map(res => res.json());
  }
  deleteRoute(route){
    console.log('Inside delete route');
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/deleteRoute',route,{headers: headers}).map(res => res.json());
  }
}
