import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class SchemaService {
  authToken: string;

  constructor(
    private http: Http    
  ) { }

  createSchema(schema) {    
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/createSchema',schema,{headers: headers}).map(res => res.json());
  }

  getSchemas(){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/getSchemas',{headers: headers}).map(res => res.json());
  }

  getSchemaData(tableName){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/table/'+tableName,{headers: headers}).map(res => res.json());
  }

  addAttribute(attribute) {
    //console.log(attribute);
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/addAttribute',attribute,{headers: headers}).map(res => res.json());
  }

  insertData(row) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/insertData',row,{headers: headers}).map(res => res.json());
  }
}
