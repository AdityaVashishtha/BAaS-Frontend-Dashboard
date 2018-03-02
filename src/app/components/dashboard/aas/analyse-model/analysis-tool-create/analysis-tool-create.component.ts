import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../../../services/dashboard/analytics.service';
import { SchemaService } from '../../../../../services/dashboard/schema.service';
import { ToastService } from '../../../../../services/util/toast.service';


@Component({
  selector: 'app-analysis-tool-create',
  templateUrl: './analysis-tool-create.component.html',
  styleUrls: ['./analysis-tool-create.component.scss']
})
export class AnalysisToolCreateComponent implements OnInit {
  
  private attributes=[];
  private schemaStructure;
  private selectedAttribute:string;
  
  private schemas:any;
  private aasSettings = {
    name: '',
    schema:'',
    attributes:[],
    
  }
  constructor(
    private analyticsService: AnalyticsService,
    private schemaService: SchemaService,
    private toastService:ToastService
    
    
  ) { }

  ngOnInit() {
    this.schemaService.getSchemas().subscribe(res => {
      this.schemas = res.schemas.map((item)=>{return item.name});
      this.aasSettings.schema=this.schemas[0]; 
      this.onSchemaSelect(this.aasSettings.schema);
    });
    
  }
  
  onSchemaSelect(schemaname){
    this.schemaService.getSchemaStructure(schemaname).subscribe(res=>{
      //console.log(res.data.structure);
      this.aasSettings.attributes=[];
      this.schemaStructure=res.data.structure;
      //console.log(this.schemaStructure);
      this.attributes=Object.keys(res.data.structure);
      //remove id,insertedAt and modifiedAt attributes
      this.attributes.splice(this.attributes.indexOf("_id"),1);
      this.attributes.splice(this.attributes.indexOf("_insertAt"),1);
      this.attributes.splice(this.attributes.indexOf("_updated"),1);
      console.log("Schema select time attributes ");
      console.log(this.attributes);
      this.selectedAttribute=this.attributes[0];
    });
  }

  onSubmit() {
    let model={
      name: this.aasSettings.name,
      data:{
        collectionName:this.aasSettings.schema,
        collectionAttributes:{
          
        }
      }
    }
    if(this.aasSettings.attributes.length==0){
      this.toastService.showToast(this.toastService.typeNum.error,"Oops!!,You have not added any attributes","");
      return;
    }
    //console.log(model);
    for(let i in this.aasSettings.attributes){
        let attrb=this.aasSettings.attributes[i];
        
        ////console.log(item);

      model.data.collectionAttributes[attrb]=this.schemaStructure[attrb].type;
    }
    //console.log(model);
    this.analyticsService.createModel(model).subscribe(res => {
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);                                                  
        this.resetForm();
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
        
      }
    }); 
  }

  removeAttribute(i) {
    let index = this.aasSettings.attributes.indexOf(i);
    if(index>=0) {
      this.aasSettings.attributes.splice(index,1);
      this.attributes.push(i);
    }
  }
  // addAttribute2(attr){
  //     if(this.aasSettings.attributes.indexOf(attr)<0)
  //       this.aasSettings.attributes.push(attr);
  //     el
  // }
  addAttribute(){
    if(this.selectedAttribute==undefined){
        return;
    }
    console.log(this.selectedAttribute);
    if(this.aasSettings.attributes.indexOf(this.selectedAttribute)<0)
      this.aasSettings.attributes.push(this.selectedAttribute);
    console.log("printing index of selected attribute");
    console.log(this.attributes.indexOf(this.selectedAttribute));
    this.attributes.splice(this.attributes.indexOf(this.selectedAttribute),1);
    this.selectedAttribute=this.attributes[0];
    ////console.log(this.outputAttributes);

    console.log(this.attributes);
    console.log(this.aasSettings.attributes);
  }
  resetForm(){
    this.aasSettings = {
      name: '',
      schema:'',
      attributes:[],
      
    }
    this.ngOnInit();
   }
  

}
