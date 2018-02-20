import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class AnalyticsService {

  constructor(
    private http: Http
  ) { }

  createModel(model) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/aas/createAnalyticsSchema',model,{headers: headers}).map(res => res.json());
  }

}
