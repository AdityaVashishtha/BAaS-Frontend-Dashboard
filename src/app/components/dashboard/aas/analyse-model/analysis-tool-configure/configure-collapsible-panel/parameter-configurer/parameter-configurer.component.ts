import { Input,Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import {ParameterItem} from '../../../../aasModels/parameterItem';
import {InputField}from '../../../../aasModels/InputField';

@Component({
  selector: 'app-parameter-configurer',
  templateUrl: './parameter-configurer.component.html',
  styleUrls: ['./parameter-configurer.component.scss']
})

export class ParameterConfigurerComponent implements OnInit {

  @Input() parameterItem;
  private parameters:InputField[]=[];
  
  constructor() { }

  ngOnInit() {
    console.log("LOGGING PARAMTER ITEMS");
        console.log(this.parameterItem);
   
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("LOGGING PARAMTER ITEMS");
        console.log(this.parameterItem);
    for(let propname in changes){
        let change=changes[propname];
        let curVal  = JSON.stringify(change.currentValue);
        let prevVal = JSON.stringify(change.previousValue);
        let changeLog = `${propname}: currentValue = ${curVal}, previousValue = ${prevVal}`;
    }
    this.generateParamterItems();
  }

  generateParamterItems(){
    this.parameters=[];;
    for(let item of this.parameterItem.params){
      this.parameters.push(
        new InputField(item.name,item.inputType,item.inpuValues,item.htmlAttributes,item.hint)
      )
    }
      
  
    }

}
