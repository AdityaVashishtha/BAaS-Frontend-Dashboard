import { Component,OnInit, ChangeDetectorRef,Input,Output,EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-configure-imported',
  templateUrl: './configure-imported.component.html',
  styleUrls: ['./configure-imported.component.scss']
})
export class ConfigureImportedComponent implements OnInit {
  title = 'app';
  //attributes={"name":"String","class":"Number","Marks":"Number","Father Name":"String"}
  @Input() attributes;
  @Output('submitEvent')emitter:EventEmitter<any>=new EventEmitter<any>();

  //attributes={"petal-length":"Number","petal-width":"Number","sepal-length":"Number","sepal-width":"Number"}
  attributesList=[];
  analyticsForm:FormGroup=new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private cdRef:ChangeDetectorRef
  ) { }

  ngOnInit(){
    this.analyticsForm = this.fb.group({ })
    this.attributesList=this.convertToArray(this.attributes);
  }
  ngAfterViewChecked()
  {
 // console.log( "Change detected" );
  
  this.cdRef.detectChanges();
  }
  private convertToArray(jsonList){
    //TODO Move it one level up or to a service
    return Object.keys(jsonList).map(item=>{return {[item]:jsonList[item]}})
  }

  private submitForm(){
    console.log("sending output")
    this.emitter.emit(this.analyticsForm.value)
  }

}



