import { Component, OnInit } from '@angular/core';

/* custom imports */
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchemaModalComponent } from './schema-modal/schema-modal.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { SchemaService } from '../../../services/dashboard/schema.service';

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
    private schemaService: SchemaService
  ) { }

  ngOnInit() {
    this.schemaService.getSchemas().subscribe(res => {
      this.schemas = res.schemas;      
    });
  }
  
  showEditSchemaModal(event) {
    console.log(event);
    const activeModal = this.modalService.open(SchemaModalComponent, {
      size: 'lg',
      // backdrop: 'static',
      container: 'nb-layout',
    });
    activeModal.componentInstance.modalTitle = "Edit Schema";    
  }

  showAddSchemaModal() {
    const activeModal = this.modalService.open(SchemaModalComponent, {
      size: 'sm',      
      container: 'nb-layout',
    });
    activeModal.componentInstance.modalTitle = "Add new Schema";    
  }
}
