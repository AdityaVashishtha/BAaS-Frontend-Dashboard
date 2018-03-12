import { Component, OnInit } from '@angular/core';
//import { AnalyticsService } from '../../../services/dashboard/analytics.service';
import { ExportDataService } from '../../../services/dashboard/export-data.service';
import { SchemaService } from '../../../services/dashboard/schema.service';
import { ToastService } from '../../../services/util/toast.service';


@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.scss']
})
export class ExportDataComponent implements OnInit {

  private attributes=[];
  private schemaStructure;
  private selectedAttribute='';
  
  private schemas:any;
  private exportConf = {
    schema:'',
    attributes:[],
    format:'',
  }
  constructor(
    private exportDataService: ExportDataService,
    private schemaService: SchemaService,
    private toastService:ToastService   
  ) { }

  ngOnInit() {
    this.schemaService.getSchemas().subscribe(res => {
      this.schemas = res.schemas.map((item)=>{return item.name});
      this.exportConf.schema=this.schemas[0]; 
      this.onSchemaSelect(this.exportConf.schema);
    });
    
  }
  
  onSchemaSelect(schemaname){
    this.schemaService.getSchemaStructure(schemaname).subscribe(res=>{
      console.log(res.data.structure);
      this.schemaStructure=res.data.structure;
      console.log(this.schemaStructure);
      this.attributes=Object.keys(res.data.structure);
      //remove id,insertedAt and modifiedAt attributes
      this.attributes.splice(this.attributes.indexOf("_id"),1);
      this.attributes.splice(this.attributes.indexOf("_insertAt"),1);
      this.attributes.splice(this.attributes.indexOf("_updated"),1);
      this.selectedAttribute=this.attributes[0];
    });
  }

  onSubmit() {
    let model={
      data:{
        collectionName:this.exportConf.schema,
        collectionAttributes:{
        }
      }
    }
    if(this.exportConf.attributes.length==0){
      this.toastService.showToast(this.toastService.typeNum.error,"Oops!!,You have not added any attributes","");
      return;
    }
    console.log(model);
    for(let i in this.exportConf.attributes){
        let attrb=this.exportConf.attributes[i];
        
      model.data.collectionAttributes[attrb]=this.schemaStructure[attrb].type;
    }
    console.log(model);
    this.exportDataService.exportData(model).subscribe(res => {
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);                                                  
        this.resetForm();
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
        
      }
    }); 
  }

  removeAttribute(i) {
    let index = this.exportConf.attributes.indexOf(i);
    if(index>=0) {
      this.exportConf.attributes.splice(index,1);
      this.attributes.push(i);
    }
  }

  addAttribute(){
    if(this.exportConf.attributes.indexOf(this.selectedAttribute)<0)
      this.exportConf.attributes.push(this.selectedAttribute);
    this.attributes.splice(this.attributes.indexOf(this.selectedAttribute),1);
    this.selectedAttribute=this.attributes[0];
    //console.log(this.outputAttributes);
  }
  resetForm(){
    this.exportConf = {
      schema:'',
      attributes:[],
      format:'',
      
    }
    this.ngOnInit();
   }

}
