import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { SchemaService } from '../../services/dashboard/schema.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private menu: any;
  
  constructor(
    private schemaService: SchemaService
  ) {    
   }

  ngOnInit() {
    let tempSchema = [];
    this.schemaService.getSchemas().subscribe((res)=>{            
      for (let schema of res.schemas) {
        tempSchema.push({
          title: schema.name,
          link: '/table/'+schema.name
        })
      }            
     });    
     this.menu = this.getMenuItems(tempSchema);
  }

  getMenuItems(schemas) {            
    let MENU_ITEMS: NbMenuItem[] = [
      {
        title: 'Analytics',
        icon: 'nb-bar-chart',
        link: '/dashboard/analytics',
        home: true,
      },
      {
        title: 'DATA',
        group: true,
      },
      {
        title: 'Schema',
        icon: 'nb-cloudy',
        link: '/dashboard/schema'
      },
      {
        title: 'Tables',
        icon: 'nb-tables',
        link: '/pages/ui-features',
        children: schemas,
      },
      {
        title: 'CRUDs',
        group: true,
      },
      {
        title: 'API console',
        icon: 'nb-paper-plane',
        link: '/pages/ui-features'
      },
      {
        title: 'SETTINGS',
        group: true,
      },
      {
        title: 'General Config',
        icon: 'nb-gear',
        link: '/pages/ui-features',    
      },  
      {
        title: 'ACL',
        icon: 'nb-locked',
        link: '/pages/ui-features',    
      },
    ];
    
    return MENU_ITEMS;
  }

}
