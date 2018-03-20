import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms'
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-preprocessing',
  templateUrl: './preprocessing.component.html',
  styleUrls: ['./preprocessing.component.css']
})
export class PreprocessingComponent implements OnInit {
  @Input() attributesList;
  @Input() formConfig: FormGroup;
  
  myForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private cdRef:ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log(this.attributesList);
    this.myForm=new FormGroup({});
    this.formConfig.addControl("preprocessing",this.myForm)
    
  }
 

 

  private submit(){
    console.log("Form submitted");
    console.log(this.myForm);
  }
}
