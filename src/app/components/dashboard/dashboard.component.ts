import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './mainMenuItems';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private menu: any;
  
  constructor() {    
   }

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}
