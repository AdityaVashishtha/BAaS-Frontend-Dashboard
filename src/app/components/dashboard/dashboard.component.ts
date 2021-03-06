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
    // this.schemaService.getSchemas().subscribe((res)=>{            
    //   for (let schema of res.schemas) {
    //     tempSchema.push({
    //       title: schema.name,
    //       link: ['table',schema.name]
    //     })
    //   }           
    //  });         
    this.menu = this.getMenuItems(tempSchema);
  }

  getMenuItems(schemas) {
    let MENU_ITEMS: NbMenuItem[] = [
      {
        title: 'Status',
        icon: 'nb-bar-chart',
        link: '/dashboard/analytics',
        home: true,
      },
      {
        title: 'End Points',
        group: true,
      },
      {
        title: 'Database',
        icon: 'nb-cloudy',
        link: '/dashboard/table',
        children: [
          {
            title: 'Schema',
            link: '/dashboard/schema'
          },
          {
            title: 'View Schema',
            link: '/dashboard/table'
          },
          {
            title: 'API Hit Points',
            link: '/dashboard/api-access'
          }
        ],
      },
      {
        title: 'Authentication',
        link: '/dashboard/authentication/settings',
        icon: 'nb-locked',
        children: [
          {
            title: 'Configurations',
            link: '/dashboard/authentication/settings'
          },
          {
            title: 'Users',
            link: '/dashboard/authentication/users'
          },
          {
            title: 'Routes',
            link: '/dashboard/authentication/routes'
          }
        ]
      },
      {
        title: 'AaS',
        icon: 'ion-ios-analytics-outline',
       children: [
        {
          title: 'Analysis Tool',
          link: '/dashboard/analytics-tool',
          children:[
            {
              title: 'Create Model',
              link: '/dashboard/analytics-tool-create',
            },
            {
              title: 'Configure Model',
              link: '/dashboard/analytics-tool-configure',
            }
          ]
        },
        // {
        //   title: 'Build Models',         
        //   children:[
        //     {
        //       title: 'Create Model',
        //       link: '/dashboard/analytics-home-create',
        //     },
        //     {
        //       title: 'Configure Model',
        //       link: '/dashboard/analytics-home-configure',
        //     }
        //   ]
        // },
        {
          title: 'Visulisation',
          link: '/dashboard/analytics/visualize'
        }
      ]
      },
      {
        title: 'Storage Service',
        link: '/dashboard/storage-configuration',
        icon: 'ion-social-dropbox-outline',
        children: [
          {
            title: 'Configurations',
            link: '/dashboard/storage-configuration'
          }          
        ]
      },
      {
        title: 'Settings',
        group: true,
      },
      {
        title: 'Logs',
        icon: 'nb-tables',
        link: '/dashboard/logs'
      },
      {
        title: 'Account',
        icon: 'nb-person',
        link: '/dashboard/user-profile',
      },
      {
        title: 'Export Data',
        icon: 'ion-ios-upload-outline',
        link: '/dashboard/export-data',
      },
      {
        title: 'Import Data',
        icon: 'ion-ios-download-outline',
        link: '/dashboard/import-data',
      }
    ];

    return MENU_ITEMS;
  }

}
