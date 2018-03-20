
import { Component,EventEmitter, Output, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  template: `
  <div class="dynamic-field form-input" [formGroup]="group">
      <div class="row">
        <div class="col-md-8">
          <label>{{ config.label }}</label>
        </div>
        <div class="col-md-4 form-group">
            <select [formControlName]="config.name" class="form-control">
            <option value="" *ngIf="!hasDefault">{{ config.placeholder }}</option>
            <option *ngFor="let option of config.options">
              {{ option.name }}
            </option>
            </select>
        </div>
      </div>
  </div>
  `,
})
export class FormSelectComponent implements  OnInit {
  config;
  group: FormGroup;
  hasDefault:boolean=false;
  defaultVal
  ngOnInit(){
    if(this.config.hasOwnProperty("hasDefaultOption"))
      this.hasDefault=true;
  }

  //   console.log("Loggin Configuration items");
  //   console.log(this.config)
  //   if(this.config.hasOwnProperty("hasDefaultOption")){
  //     this.hasDefault=true;
  //     let controlName= this.config.name;
  //     this.config.controls.controlName.controls.setValue(this.config.options[0].name)
  //    // this.group.controls.eval(this.config.name).setValue()
  //   }

  //   console.log(`The hasDefault for select is ${this.hasDefault}`)
  //   console.log('THhe form group controls are ')
  //   console.log(this.group.controls);
    
  // }
  
  // @Output()
  // eventEmitter:EventEmitter<any>=new EventEmitter<any>();

  // onChange(event){
  //   console.log("Changed occured here") ;
  //   console.log(event);
  // }
}