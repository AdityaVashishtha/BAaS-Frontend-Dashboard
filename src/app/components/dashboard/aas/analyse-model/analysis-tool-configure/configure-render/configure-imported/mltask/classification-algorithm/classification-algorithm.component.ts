import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormArray,FormGroup,FormControl } from '@angular/forms';
import {ClassificationAlgoOptions} from './configItems'
@Component({
  selector: 'app-classification-algorithm',
  templateUrl: './classification-algorithm.component.html',
  styleUrls: ['./classification-algorithm.component.css'],
  providers:[ClassificationAlgoOptions]
})
export class ClassificationAlgorithmComponent implements OnInit {
@Input() index;
@Input() config;
@Input() formGrp:FormGroup;
@Input() arrayLength;
@Output('remove') emitter:EventEmitter<any>=new EventEmitter<any>();
  constructor(
    private algoOptions:ClassificationAlgoOptions
  ) { }

  ngOnInit() {
    console.log(`Algorithm NUmber ${this.index} Length: ${this.arrayLength}`)
  }

  static getFormConfig(){
      return ClassificationAlgoOptions.classificationAlgoConfigurations;
  }

  removeAlgorithm(){
    this.emitter.emit(this.index);
  }

}
