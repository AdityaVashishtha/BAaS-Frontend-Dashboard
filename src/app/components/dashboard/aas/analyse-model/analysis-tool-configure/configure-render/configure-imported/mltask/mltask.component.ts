import { Component, OnInit, Input,AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MlTaskConfigurer } from './configItems';
import {ClassificationAlgorithmComponent} from './classification-algorithm/classification-algorithm.component'
import {RegressionAlgorithmComponent} from './regression-algorithm/regression-algorithm.component'



@Component({
  selector: 'app-mltask',
  templateUrl: './mltask.component.html',
  styleUrls: ['./mltask.component.css'],
  providers: [MlTaskConfigurer]

})
export class MltaskComponent implements OnInit,AfterViewInit{
  @Input() attributesList;
  @Input() formConfig: FormGroup;
  myForm: FormGroup;
  taskTypeForm: FormGroup;
  scoringFunctionForm: FormGroup;
  evaluationForm: FormGroup;

  algos:FormArray;
  algoParams:FormGroup=new FormGroup({
    'chosenValue': new FormControl('', Validators.required),
      "params": new FormGroup({})
  });

  algoConfigItems=[];
  classficationAlgos: FormArray=new FormArray([]);
  regressionAlgos: FormArray=new FormArray([]);

  algoType;
  algoTypeSelected:boolean=false;
  constructor(
    private configItem: MlTaskConfigurer

  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({})
    this.algos=new FormArray([]);
    this.evaluationForm = new FormGroup({
      'chosenValue': new FormControl('', Validators.required),
      "params": new FormGroup({})
    });
    this.formConfig.addControl("mltask", this.myForm)
    this.myForm.addControl("eval", this.evaluationForm)
    this.myForm.addControl("algoParams",this.algos)
    console.log("LOGGING CONFIG ITEMS FROM MLTASK")
    console.log(this.configItem.mlTaskOptions)


  

  }

  ngAfterViewInit(){

      this.myForm.controls.task_type.valueChanges.subscribe(change=>{
        this.algoTypeSelected=this.myForm.controls.task_type.valid;
       console.log(this.algoTypeSelected)
        console.log("IS VALID ?? "+this.algoTypeSelected)
        if(this.algoType!=change){
          while (this.algos.length !== 0) {
            this.algos.removeAt(0)
          }
          this.algoConfigItems=[];
        }
        this.algoType=change
        this.addAlgorithm();
        console.log( `Algo type is now ${this.algoType}`)
        console.log("The values of algos and algoConfigItems are ")
        console.log(this.algos);
        console.log(this.algoConfigItems);
      })
    }  
 
 private addAlgorithm(){
    if(this.algoType=="Classification"){
      this.algoConfigItems.push(ClassificationAlgorithmComponent.getFormConfig());
      this.algos.push(new FormGroup({
        'chosenValue': new FormControl('', Validators.required),
          "params": new FormGroup({})
      }));
      console.log("Logging algoparams ")
      console.log(this.algoConfigItems);
      console.log("Logginn algos ")
      console.log(this.algos)
    }
    else if(this.algoType=="Regression"){
      this.algoConfigItems.push(RegressionAlgorithmComponent.getFormConfig());
      this.algos.push(new FormGroup({
        'chosenValue': new FormControl('', Validators.required),
          "params": new FormGroup({})
      }));
      console.log("Logging algoparams ")
      console.log(this.algoConfigItems);
      console.log("Logginn algos ")
      console.log(this.algos)

    }
 }


  private submit() {
    console.log("Form submitted");
    console.log(this.myForm);
  }

  removeAlgorithm($event){
    console.log("NEED TO REMOVE "+$event);
    //this.algoConfigItems.splice($event,1)
    this.algos.push(new FormGroup({
      'chosenValue': new FormControl('', Validators.required),
        "params": new FormGroup({})
    }));
    this.algos.removeAt($event);


    console.log("SEE HERE FOR REMOVAL")
    console.log(this.algoConfigItems)
    console.log(this.algos.controls.values)
  }
}

