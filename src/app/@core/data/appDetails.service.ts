import { Injectable } from '@angular/core';

@Injectable()
export class AppDetailsService {
  private app;
  constructor() {
    this.app = {
      name: 'Bookie'
    }
  }

  getAppDetails() {
   return this.app; 
  }

}