import { Output, Input, Component, OnInit, EventEmitter } from '@angular/core';
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
  @Output() expectationEvent = new EventEmitter<any>();
  
  private inputItems:InputField[]=[];
  private forEachAttributes=[];

  private aasReply={};
 
  constructor() { }

  ngOnInit() {
    console.log("logging subsecion contents from panel-subsection");
    console.log(this.subsectionContents);
    console.log(this.attributesList);
    this.prepareInputFields();
    
  }

  prepareInputFields(){
    if(!this.subsectionContents.forEach){
      /**
       * if not required for all attributes of data,just use default name and create input items with it.
       */
      console.log(`From panel-subsection ${this.subsectionContents.inputSource||''}`)
      this.inputItems.push(new InputField(
        this.subsectionContents.defaultDisplayName,
        this.subsectionContents.inputType,
        this.subsectionContents.inputValues,
        this.subsectionContents.htmlAttributes,
        this.subsectionContents.inputSource||'',
        this.subsectionContents.expectation||{},
        this.subsectionContents.hint
      ));
    
    }
    else{
      /**
       * Find the list of attributes who have the datatype of aasAttributes
       * and send them individually to the Inout Field
       */
      let requiredAttributes=[];
      let values=Object.values(this.attributesList);
      Object.keys(this.attributesList).forEach((element,index) => {
        //console.log(values[index]);
        if(values[index]===this.subsectionContents.aasAttributesType)
        this.inputItems.push(new InputField(
          element,
          this.subsectionContents.inputType,
          this.subsectionContents.inputValues,
          this.subsectionContents.htmlAttributes,
          this.subsectionContents.inputSource||null,
          this.subsectionContents.expectations||{},
          this.subsectionContents.hint
        ));
      });
      //TODO this part
      console.log(this.forEachAttributes); 
    }
  }
  receiveExpectation(event) {
    console.log(event);
    console.log("Receiving expectations from panel-subsection");
    this.aasReply[event.identifier] = event.content;
    console.log(this.aasReply);
    this.expectationEvent.emit(this.aasReply);
  }

}
