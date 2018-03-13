import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchemaService } from '../../../../../services/dashboard/schema.service';

@Component({
  selector: 'app-attribute-config',
  templateUrl: './attribute-config.component.html',
  styleUrls: ['./attribute-config.component.scss']
})
export class AttributeConfigComponent implements OnInit {
  @Input() attributeStructure: {};
  @Input() schemaName: string;
  @Output() removeAttributeFinished = new EventEmitter<any>();
  private structure: any;
  private dataTypes: any; 
  private enumValue: string = '';
  constructor(
    private schemaService: SchemaService,      
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
  }

  ngOnInit() {
    this.structure = (this.attributeStructure);
  }

  removeAttribute(e) {
    if (this.schemaName) {
      if (window.confirm('Do you really want to remove ' + this.attributeStructure['name'] + ' attribute ?')) {
        if (window.confirm('Data and routes corresponding to the attribute will also be removed !! sure to delete ?')) {
          let attribute = {
            schemaName: this.schemaName,
            attribute: this.attributeStructure
          }
          this.schemaService.removeAttribute(attribute)
            .subscribe(res => {
              this.removeAttributeFinished.emit(res);              
            });
        }
      }
    }
  }

  addValueInEnum(){
    let isPresent = this.attributeStructure['enumValues'].indexOf(this.enumValue);
    //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
    if(isPresent>=0 || this.enumValue.toString().length === 0 )      
      alert("Unique values only!!");
    else {
      this.attributeStructure['enumValues'].push(this.enumValue);      
    }        
    this.enumValue = "";
  }

  removeValueFromEnum(e) {
    let index =  this.attributeStructure['enumValues'].indexOf(e);
    if(index>=0) {
      this.attributeStructure['enumValues'].splice(index,1);
    }
  }

}
