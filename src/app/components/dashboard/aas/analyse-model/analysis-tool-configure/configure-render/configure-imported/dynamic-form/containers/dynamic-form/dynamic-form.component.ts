import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
   template: `
  <div
  class="dynamic-form"
  [formGroup]="formGrp"
 >
  <ng-container
    *ngFor="let field of config;"
    dynamicField
    [config]="field"
    [group]="formGrp">
  </ng-container>
</div>

  `
})
export class DynamicFormComponent implements OnInit {

  @Input()
  config: any[] = [];
  @Input()
  formGrp:FormGroup;
  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();


  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //console.log("LOGGING config from select component")
     this.createGroup();
     //console.log(this.config)
     
  }

  createGroup() {
    this.config.forEach(control =>{
       this.formGrp.addControl(control.name, this.fb.control(control.defaultValue||'',control.Validators))
       if(control.hasDefaultOption){
        this.formGrp.get(control.name).setValue(control.options[0].name);
    } 
    });
   
  }
 
}