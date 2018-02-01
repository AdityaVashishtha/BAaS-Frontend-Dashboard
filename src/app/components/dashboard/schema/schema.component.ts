import { Component, OnInit } from '@angular/core';

/* custom imports */
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchemaModalComponent } from './schema-modal/schema-modal.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SchemaService } from '../../../services/dashboard/schema.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/util/toast.service';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.scss']
})
export class SchemaComponent implements OnInit {
  // for dummy data
  schemas: any;  

  constructor(
    private modalService: NgbModal,
    private schemaService: SchemaService,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.schemaService.getSchemas().subscribe(res => {
      this.schemas = res.schemas;      
    });
  }
  
  editSchema(event) {
    //console.log(event);
    this.router.navigateByUrl('dashboard/'+'table/'+event);
    // console.log(event);
    // const activeModal = this.modalService.open(SchemaModalComponent, {
    //   size: 'lg',
    //   // backdrop: 'static',
    //   container: 'nb-layout',
    // });    
    // activeModal.componentInstance.modalTitle = "Edit Schema";        
  }

  showAddSchemaModal() {
    const activeModal = this.modalService.open(SchemaModalComponent, {
      size: 'sm',      
      container: 'nb-layout',
    });
    activeModal.result.then(
      (result) => {
        if(result)
          this.schemas.push(result);
      },
      (reason) => {});
    activeModal.componentInstance.modalTitle = "Add new Schema";         
  }

  apiAccess(schemaName) {
    this.router.navigate(['dashboard','api-access',schemaName]);
  }


  deleteSchema(schemaName) {
    if (window.confirm('Are you sure you want to delete?')) {
      if (window.confirm('Data lost would not be recovered, are you sure that you want to delete schema?')) {
        this.schemaService.deleteSchema(schemaName).subscribe(res=>{
          if(res.success) {
            this.toastService.showToast(this.toastService.typeNum.success,"Hurray!",res.message);
            this.ngOnInit();
          } else {
            this.toastService.showToast(this.toastService.typeNum.error,"Oops!",res.message);
          }
        });
      }      
    }
  }
}
