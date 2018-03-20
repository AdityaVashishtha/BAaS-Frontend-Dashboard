import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormArray,FormGroup,FormControl } from '@angular/forms';
import {RegressionAlgoOptions} from './configItems'

@Component({
  selector: 'app-regression-algorithm',
  templateUrl: './regression-algorithm.component.html',
  styleUrls: ['./regression-algorithm.component.css'],
  providers:[RegressionAlgoOptions]
})
export class RegressionAlgorithmComponent implements OnInit {

  @Input() index;
  @Input() config;
  @Input() formGrp:FormGroup;
  @Input() arrayLength;
  @Output('remove') emitter:EventEmitter<any>=new EventEmitter<any>();
    constructor(
      private algoOptions:RegressionAlgoOptions
    ) { }
  
    ngOnInit() {
      console.log(`Algorithm NUmber ${this.index} Length: ${this.arrayLength}`)
    }
  
    static getFormConfig(){
        return RegressionAlgoOptions.regressionAlgoConfigurations;
    }
  
    removeAlgorithm(){
      this.emitter.emit(this.index);
    }
  
  }
  