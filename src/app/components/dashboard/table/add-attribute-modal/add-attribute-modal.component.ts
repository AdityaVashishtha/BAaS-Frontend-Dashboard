import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { ToastService } from '../../../../services/util/toast.service';

@Component({
  selector: 'app-add-attribute-modal',
  templateUrl: './add-attribute-modal.component.html',
  styleUrls: ['./add-attribute-modal.component.scss']
})
export class AddAttributeModalComponent implements OnInit {
  modalTitle: string;
  dataTypes: string[];
  tableName: string;
  attrDataType: string;
  attrName: string;
  constructor(
    private activeModal: NgbActiveModal,
    private schemaService: SchemaService,
    private toastService: ToastService
  ) {
    this.dataTypes = [
      'string',
      'number',
      'decimal'
    ]
    this.attrDataType = this.dataTypes[0];
   }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }
  addAttribute() {
    let attribute = {
      type: this.attrDataType,
      name: this.attrName,
      schema: this.tableName
    }
    this.schemaService.addAttribute(attribute).subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
    this.activeModal.close(attribute);
  }
}
