import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class StorageService {

  constructor(
    private http: Http
  ) { }
  
  addStorageConfiguration(storageConfig) {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/dashboard/storage-service/addStrorageConfig',storageConfig,{headers: headers}).map(res => res.json());        
  }

  getStorageConfiguration() {
    let token = localStorage.getItem('id_token');        
    let headers = new Headers();
    headers.append('Authorization',token);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:4000/dashboard/storage-service/getStorageConfig',{headers: headers}).map(res => res.json());        
  }

}
