import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class SchemaService {
  authToken: string;    
  private SERVER_ADDRESS = 'http://localhost:4000/'; // 'http://localhost:4000';
  constructor(
    private http: Http    
  ) { }

  createSchema(schema) {    
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/createSchema',schema,{headers: headers}).map(res => res.json());
  }

  deleteSchema(schemaName) {
    let schema = { name: schemaName };
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/deleteSchema',schema,{headers: headers}).map(res => res.json());
  }

  archiveSchema(schemaName) {
    console.log("TODO - Archive Schema Functionality");
    console.log("Import Data Functionality");
  }

  getSchemas(){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/schema/getSchemas',{headers: headers}).map(res => res.json());
  }

  getSchemaData(tableName){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/schema/table/'+tableName,{headers: headers}).map(res => res.json());
  }

  getSchemaStructure(tableName){
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get(this.SERVER_ADDRESS+'dashboard/schema/getSchemaDetail/'+tableName,{headers: headers}).map(res => res.json());
  }

  addAttribute(attribute) {
    //console.log(attribute);
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/addAttribute',attribute,{headers: headers}).map(res => res.json());
  }

  removeAttribute(attribute) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');    
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/removeAttribute',attribute,{headers: headers}).map(res => res.json());
  }

  editSchemaStructure(schemaStructure) {    
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/editSchemaStructure',schemaStructure,{headers: headers}).map(res => res.json());
  }

  insertData(row) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/insertData',row,{headers: headers}).map(res => res.json());
  }

  deleteData(row) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post(this.SERVER_ADDRESS+'dashboard/schema/deleteData',row,{headers: headers}).map(res => res.json());
  }
}
