import {Input, Component, OnInit } from '@angular/core';
import { InputField } from "../../../../aasModels/InputField";
import {PanelInputFieldComponent} from "../panel-input-field/panel-input-field.component"
@Component({
  selector: 'app-panel-subsection',
  templateUrl: './panel-subsection.component.html',
  styleUrls: ['./panel-subsection.component.scss']
})
export class PanelSubsectionComponent implements OnInit {
  @Input() subsectionContents:any;
  @Input() attributesList:any;
  
  private inputItems:InputField[]=[];
  private forEachAttributes=[];
  constructor() { }

  ngOnInit() {
    console.log("logging subsecion contents");
    console.log(this.subsectionContents);
    console.log(this.attributesList);
    this.prepareInputFields();
    
  }

  prepareInputFields(){
    if(!this.subsectionContents.forEach){
      // this.inputItem["name"]=this.subsectionContents.defaultDisplayName;
      // this.inputItem["inputType"]
      // this.inputItem["inputAttributes"]
      // this.inputItem["inputValues"]
      // this.inputItem["htmlAttributes"]
      /**
       * if not required for all attributes of data,just use default name and create input items with it.
       */
      this.inputItems.push(new InputField(
        this.subsectionContents.defaultDisplayName,
        this.subsectionContents.inputType,
        this.subsectionContents.inputValues,
        this.subsectionContents.htmlAttributes,
        this.subsectionContents.hint
      ));
    
    }
    else{
      /**
       * Find the list of attributes who have the datatype of aasAttributes
       * and send them individually to the Inout Field
       */
      let requiredAttributes=[];
      console.log("logging started");
      let values=Object.values(this.attributesList);
      Object.keys(this.attributesList).forEach((element,index) => {
        //console.log(values[index]);
        if(values[index]===this.subsectionContents.aasAttributesType)
        this.inputItems.push(new InputField(
          element,
          this.subsectionContents.inputType,
          this.subsectionContents.inputValues,
          this.subsectionContents.htmlAttributes,
          this.subsectionContents.hint
        ));
      });
      //TODO this part
      console.log(this.forEachAttributes); 
    }
  }

}
