import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { ToastService } from '../../../../services/util/toast.service';

@Component({
  selector: 'app-schema-modal',
  templateUrl: './schema-modal.component.html',
  styleUrls: ['./schema-modal.component.scss']
})
export class SchemaModalComponent implements OnInit {
  modalTitle: string;
  name: string;
  submitted: boolean;
  newSchema: any;

  constructor(
    private activeModal: NgbActiveModal,
    private schemaService: SchemaService,
    private toastService: ToastService    
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  createSchema() {
    if(this.modalTitle === "Add new Schema") {
      this.submitted =true
      let schema = {
        name: this.name.toLowerCase()
      }      
      this.schemaService.createSchema(schema).subscribe((res)=>{
        if(res.success) {
          this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);                                                  
          this.activeModal.close(schema);
        } else {
          this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
          this.activeModal.close();
        }
      });            
    }    
  }   
}
