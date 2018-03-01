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
  private enumValue: string = '';
  private attribute = {
    name: '',
    type: 'string',
    isRequired: false,
    isUnique: false,
    default: '',
    encryptInHash: false,
    schema: null,
    regexPattern: '',
    enumValues: []
  }

  constructor(
    private activeModal: NgbActiveModal,
    private schemaService: SchemaService,
    private toastService: ToastService
  ) {
    this.dataTypes = [
      'string',
      'number',            
      'boolean',      
      'json',
      'enum',
      'date-iso',      
      'timestamp',
      'integer',
      'decimal-only',      
      'hexadecimal-number',      
      'array',      
      'alphanumeric-only',
      'email',
      'url',      
      'mobile-phone',
      'regex-validator',
    ]
    this.attrDataType = this.dataTypes[0];
   }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  addAttribute() {    
    // let attribute = {
    //   type: this.attrDataType,
    //   name: this.attrName,
    //   schema: this.tableName
    // }
    this.attribute.schema = this.tableName;
    this.schemaService.addAttribute(this.attribute)
    .subscribe(res=>{
      console.log(res);
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
    this.activeModal.close(this.attribute);
  }

  addValueInEnum(){
    let isPresent = this.attribute.enumValues.indexOf(this.enumValue);
    //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
    if(isPresent>=0 || this.enumValue.toString().length === 0 )      
      alert("Unique values only!!");
    else {
      this.attribute.enumValues.push(this.enumValue);      
    }        
    this.enumValue = "";
  }

  removeValueFromEnum(e) {
    let index =  this.attribute.enumValues.indexOf(e);
    if(index>=0) {
      this.attribute.enumValues.splice(index,1);
    }
  }

}
