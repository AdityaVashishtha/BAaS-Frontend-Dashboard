import { NbMenuItem } from '@nebular/theme';

export var MENU_ITEMS: NbMenuItem[] = [
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
    children: [
      {
        title: 'User',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Book',
        link: '/tables/book',
      },
    ],
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
