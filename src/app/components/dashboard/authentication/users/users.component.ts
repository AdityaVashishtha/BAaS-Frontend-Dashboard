import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Router } from '@angular/router';
import { ToastService } from '../../../../services/util/toast.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableTitle: String;
  settings: any;
  structure: any;
  private sub: any;  
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private route: ActivatedRoute,
    private schemaService: SchemaService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private router: Router
  ) {
    this.settings = {};
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      this.tableTitle = 'authuser';
      this.schemaService.getSchemaData(this.tableTitle).subscribe(res => {
        if (res.data !== null && res.data.structure) {
          if(res.success)
            this.toastService.showToast(this.toastService.typeNum.info,"",res.message);
          Object.keys(res.data.structure).forEach((i) => {
            res.data.structure[i].title = i;
            res.data.structure[i].editable = false;
          });
          this.settings = {
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
              confirmCreate: true
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
              confirmSave: true
            },
            delete: {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true,
            },
            actions: {
              edit: false
            },
            columns: res.data.structure,
          };
          let data = res.data.rows;
          this.source.load(data);
        } else {
          this.settings = {
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
              confirmCreate: true
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
              confirmSave: true
            },
            delete: {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true,
            },
            actions: {
              edit: false
            },
            columns: {},
          };
        }
      });
    });
  }

  onSelectSchema(schemaName) {
    this.router.navigate(['dashboard', 'table', schemaName]);
  }

  onCreateConfirm(event): void {    
    let row = {
      schema: this.tableTitle,
      data: event.newData
    };
    this.schemaService.insertData(row).subscribe(res => {           
      if (res.success) {        
        event.confirm.resolve();
        this.toastService.showToast(this.toastService.typeNum.success, "Hurray!!", res.message);
        this.ngOnInit();
      } else {
        event.confirm.reject();
        this.toastService.showToast(this.toastService.typeNum.error, "Oops!!", res.message);
      }
    });
  }

  onSaveConfirm(event): void {
    console.log("Save confirm");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {      
      let row = {
        schema: this.tableTitle,
        data: event.data
      };
      this.schemaService.deleteData(row).subscribe(res => {
        console.log(res);
        if (res.success) {
          event.confirm.resolve();
          this.toastService.showToast(this.toastService.typeNum.success, "Hurray!!", res.message);
          //this.ngOnInit();
        } else {
          event.confirm.reject();
          this.toastService.showToast(this.toastService.typeNum.error, "Oops!!", res.message);
        }
      });      
    } else {
      event.confirm.reject();
    }
  }



}
