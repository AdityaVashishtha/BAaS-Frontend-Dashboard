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

  constructor(
    private schemaService: SchemaService,      
  ) {
    this.dataTypes = [
      'string',
      'number',
      'boolean',
      'json',
      'enum-todo',
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
      'regex-validator-todo',
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

}
