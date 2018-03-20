import { Component, OnInit, Input  } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-iovariables',
  templateUrl: './iovariables.component.html',
  styleUrls: ['./iovariables.component.css']
})
export class IovariablesComponent implements OnInit {
  @Input() attributesList;
  @Input() formConfig: FormGroup;

  outputAttributesList = [];
  selectedAttribute;
  myForm: FormControl;


  constructor(
    
  ) {
    
   }

  ngOnInit() {
    this.myForm = new FormControl('',Validators.required);
    this.formConfig.addControl("output_variables", this.myForm)
    this.selectedAttribute = this.attributesList[0];
    console.log("IO caariables trarted");
    console.log("Logging attribute list from iovariables")
    console.log(this.attributesList);
    this.attributesList.forEach(element => {
      console.log(element);
      element['displayName']=Object.keys(element)[0];
    });
    console.log("Logging attribute list from iovariables 2")
    console.log(this.attributesList);

    this.myForm.valueChanges.subscribe(item=>{
      console.log(item);
    })
    
  }

  

  //TODO Add remove buttons and call these functions
  /*  removeAttribute(i) {
     let index = this.aasSettings.attributes.indexOf(i);
     if(index>=0) {
       this.aasSettings.attributes.splice(index,1);
       this.attributes.push(i);
     }
   } */

  addOutputAttribute() {
    console.log("Logging selcted attrbiutye");
    console.log(this.selectedAttribute)
    if (!this.selectedAttribute) {
      console.error("Invalid");
      return;
    }
    if (this.outputAttributesList.indexOf(this.selectedAttribute) < 0)
     {
      delete this.selectedAttribute.displayName;
    //  this.myForm.push(this.selectedAttribute);
      this.outputAttributesList.push(this.selectedAttribute);
     }
    this.attributesList.splice(this.attributesList.indexOf(this.selectedAttribute), 1);
    this.selectedAttribute = this.attributesList[0];
    console.log("logging my form from iovars")
    console.log(this.myForm.value)
    console.log(this.outputAttributesList);
  }
}


