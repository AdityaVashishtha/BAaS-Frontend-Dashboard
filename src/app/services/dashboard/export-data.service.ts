import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';


@Injectable()
export class ExportDataService {

  constructor(
    private http: Http) {}
    
    exportData(model) {
      let token = localStorage.getItem('id_token');        
      let headers = new Headers();
      headers.append('Authorization',token);
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:4000/dashboard/utils/exportToCSV',model,{headers: headers}).map(res => res.json());
    }  

}
