import { Input, Component, OnInit,Output,EventEmitter } from '@angular/core';
import { InputField } from "../../../../aasModels/InputField";
import {ParameterConfigurerComponent} from '../parameter-configurer/parameter-configurer.component'

@Component({
  selector: 'app-panel-input-field',
  templateUrl: './panel-input-field.component.html',
  styleUrls: ['./panel-input-field.component.scss']
})
export class PanelInputFieldComponent implements OnInit {
  @Input() inputItem: InputField;
  @Input() attributesList:any;
  @Output() expectationEvent = new EventEmitter<any>();
  private expectation;
  
  private parameterItem;
  private selectBox: boolean = false;
  private inputBox: boolean = false;
  private listBox:boolean=true;

  private selectBoxValue: any;
  private parameterBoxDisplay=false;
  

  /**
   * These 3 are for List type input box
   */
  private itemList=[];
  private selectedList=[];
  private selectedItem;
  
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
    console.log(`Logging attributes list from panel input field `)
    console.log(this.attributesList);
    if (this.inputItem.inputType == "select")
      this.selectBox = true;
    else if (this.inputItem.inputType == "input")
      this.inputBox = true;
    else if (this.inputItem.inputType == "list"){
      this.listBox = true;
      console.log(`DELeTe here `)
      console.log(this.inputItem)
      if(this.inputItem.inputSource=="default"){
        this.itemList=this.attributesList;
        this.selectedItem=this.itemList[0];
        console.log(`Item list and selected items are ${this.itemList} and ${this.selectedItem}`)
      }
    }

    //this.boxValues=this.inputItem.inputValues;

  }

  onChange(option) {
    if(option.name && option.params.length>0){
      this.parameterBoxDisplay=true;
    }
    this.parameterItem = option;
    //console.log(option);
  
  }
  addToList(){
    console.log(this.selectedItem);
    if(this.selectedItem==undefined || this.selectedItem.name==''){
      return;
  }
    if(this.selectedList.indexOf(this.selectedItem)<0)
      this.selectedList.push(this.selectedItem);
    this.itemList.splice(this.itemList.indexOf(this.selectedItem),1);
    this.selectedItem=(this.itemList.length>0)?this.itemList[0]:{"name":''};
    //console.log(this.outputAttributes);
  }
  removeFromList(i) {
    let index = this.selectedList.indexOf(i);
    if(index>=0) {
      this.selectedList.splice(index,1);
      this.itemList.push(i);
    }
  }
  generateExpectation() {
    console.log(this.inputItem);
    console.log("There were the input Item")
    var value;
     if(this.listBox){
       value={};
       this.selectedList.forEach(item=>(value[item.name])=item.type)
     }
      this.expectation = {
        "identifier":this.inputItem.expectation.identifier,
        "content": {
          "value": value
        }
      }
      
      //console.log("I came here");
      this.expectationEvent.emit(this.expectation);
 
  }

  

}
