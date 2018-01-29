import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { SchemaService } from '../../../services/dashboard/schema.service';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { AddAttributeModalComponent } from './add-attribute-modal/add-attribute-modal.component';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/util/toast.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableTitle: String;
  settings: any;
  structure: any;
  private sub: any;
  private schemas: string[];
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
      this.tableTitle = params.get('schemaName');
      this.schemaService.getSchemas().subscribe(res => {
        this.schemas = res.schemas;
        if (this.tableTitle === null)
          this.tableTitle = res.schemas[0].name;
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
    });
  }

  openAddColumnModal() {
    let activeModal = this.modalService.open(AddAttributeModalComponent, {
      size: 'lg',
      container: 'nb-layout',
    });
    activeModal.componentInstance.modalTitle = "Add Attribute";
    activeModal.componentInstance.tableName = this.tableTitle;
    activeModal.result.then(
      (result) => {
        if (result) {
          this.settings.columns[result.name] = { type: result.type, title: result.name };
          //this.router.navigate(['dashboard','schema']);
          this.ngOnInit();
        }
      },
      (reason) => { }
    );
  }

  onSelectSchema(schemaName) {
    this.router.navigate(['dashboard', 'table', schemaName]);
  }

  onCreateConfirm(event): void {
    //console.log("Create confirm");
    let row = {
      schema: this.tableTitle,
      data: event.newData
    };
    this.schemaService.insertData(row).subscribe(res => {
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
  }

  onSaveConfirm(event): void {
    console.log("Save confirm");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}