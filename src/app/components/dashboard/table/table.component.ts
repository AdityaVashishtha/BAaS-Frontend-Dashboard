import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableTitle: String;
  settings: any;
  
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private route: ActivatedRoute
  ) {
    let data = [{
      id: 1,
      name: 'Tor Intoto',
      author: 'Buiruto',
      isbn: '2365897400'
    }, {
      id: 2,
      name: 'Infinite Wars',
      author: 'Thornton',
      isbn: '@fat'      
    }]

    this.source.load(data);
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.tableTitle = params.get('schemaName');
    });

    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        id: {
          title: 'ID',
          type: 'number',
        },
        name: {
          title: 'Name',
          type: 'string',
        },
        author: {
          title: 'Author Name',
          type: 'string',
        },
        isbn: {
          title: 'ISBN',
          type: 'number',
        }
      },
    };
        
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
 
}
