import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import {OnlyNumber} from '../../../customValidators/onlyNumberValidator.directive'
@Component({
    selector: 'dynamic-form-dispatcher',
    template: `
    <div class="">
        <div class="">
            <div class=""[formGroup]="formGrp">
                <ng-container
                *ngFor="let field of generatedConfig;"
                dynamicField
                [config]="field"
                [group]="formGrp">
                </ng-container>
            </div>
        </div>
        <div class="" *ngIf="paramsReady">
                <div class=""[formGroup]="formGrp.controls.params">
                    <ng-container
                    *ngFor="let field of params;"
                    dynamicField
                    [config]="field"
                    [group]="formGrp.controls.params">
                    </ng-container>
                </div>
        </div>
        
    </div>
  `
})
export class DynamicFormDispatcherComponent implements OnInit {

    @Input()
    config;
    @Input()
    formGrp: FormGroup;
    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();

    params=[];
    paramsReady:boolean=false;
    form: FormGroup;
    generatedConfig = [];

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        //console.log("Dispatcher called")
        //console.log(this.formGrp);
        //console.log(this.config);
        //console.log("Dispatcher details finished");
        this.generateTitleConfig();
        //console.log("Generated Config are");
        //console.log(this.generatedConfig);

        this.formGrp.controls.chosenValue.valueChanges.subscribe(data => {
            //console.log("Data changed");
       
            for(let option of this.config.ioptions){
                if(option.name==data){
                    if(option.hasParams){
                        this.params=option.params;
                        this.paramsReady=true
                    }
                    else{
                        this.params=[];
                        this.paramsReady=false
                    }
              
                    break;
                }
            }
            //console.log("New parameters are ");
            //console.log(this.params)
            this.formGrp.removeControl('params');
            let grp=new FormGroup({});
            this.params.forEach(control => {
                grp.addControl(control.name, new FormControl(control.defaultValue||'',control.validators));
                if(control.hasDefaultOption){
                    grp.get(control.name).setValue(control.options[0].name);
                }
                //console.log(`Logging FORM VALIDATORS FOR `+control.name)
                //console.log(control.validators)
            });
            this.formGrp.addControl('params',grp);
        })

        
    }



    generateTitleConfig() {
        this.generatedConfig = [
            {
                type: this.config.itype,
                name: 'chosenValue',
                label: this.config.iname,
                options: this.config.ioptions,
                placeholder: this.config.placeholder,
                
            }
        ]
    }

   

}