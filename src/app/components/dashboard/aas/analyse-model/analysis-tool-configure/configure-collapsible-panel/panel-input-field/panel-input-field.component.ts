import { Input, Component, OnInit } from '@angular/core';
import { InputField } from "../../../../aasModels/InputField";
import {ParameterConfigurerComponent} from '../parameter-configurer/parameter-configurer.component'

@Component({
  selector: 'app-panel-input-field',
  templateUrl: './panel-input-field.component.html',
  styleUrls: ['./panel-input-field.component.scss']
})
export class PanelInputFieldComponent implements OnInit {
  @Input() inputItem: InputField;
  private parameterItem;
  private selectBox: boolean = false;
  private inputBox: boolean = false;
  private selectBoxValue: any;
  private parameterBoxDisplay=false;
  // private boxValues:any;
  // private boxAttributes:any;


  constructor() { }

  ngOnInit() {
    /**
     * The input field has 3 types of values received
     * Name              InputField
     * 
     * Parameters[+]
     * attr1  val1
     * attr2  val2
     * .
     * .
     * .
     * 
     */
    console.log("INPUT ITEM RECEIVED");
    console.log(this.inputItem);
    if (this.inputItem.inputType == "select")
      this.selectBox = true;
    else if (this.inputItem.inputType == "input")
      this.inputBox = true;
    //this.boxValues=this.inputItem.inputValues;

  }

  onChange(option) {
    if(option.name && option.params.length>0){
      this.parameterBoxDisplay=true;
    }
    this.parameterItem = option;
    //console.log(option);
  
  }

}
