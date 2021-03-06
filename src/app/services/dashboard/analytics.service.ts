import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class AnalyticsService {
  private SERVER_ADDRESS = 'http://localhost:4000/' ;//http://localhost:4000';
  constructor(
    private http: Http
  ) { }

  createModel(model) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/aas/createAnalyticsSchema',model,{headers: headers}).map(res => res.json());
  }

  getModels(){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/aas/getAnalyticsSchemas',{headers: headers}).map(res => res.json());
  }
  getAasJSON(){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/aas/getAasJSON',{headers: headers}).map(res => res.json());
  }

  sendModelConfiguration(config){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/aas/addAnalyticsStructure',config,{headers: headers}).map(res => res.json());
 
  }
  
  startTraining(config){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/aas/analytics/train',config,{headers: headers}).map(res => res.json());
 
  }

  startFinalTraining(config){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/aas/analytics/finalTrain',config,{headers: headers}).map(res => res.json());
 
  }

}
