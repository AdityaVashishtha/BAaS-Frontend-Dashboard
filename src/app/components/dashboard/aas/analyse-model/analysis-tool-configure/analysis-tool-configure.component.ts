import { AnalyticsService } from '../../../../../services/dashboard/analytics.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { SchemaService } from '../../../../../services/dashboard/schema.service';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Router } from '@angular/router';
import { ToastService } from '../../../../../services/util/toast.service';
import {ConfigureRenderComponent} from "./configure-render/configure-render.component";
import data from './ml.json';



@Component({
  selector: 'app-analysis-tool-configure',
  templateUrl: './analysis-tool-configure.component.html',
  styleUrls: ['./analysis-tool-configure.component.scss']
})
export class AnalysisToolConfigureComponent implements OnInit {
  
  tableTitle: String;
  private modelMainConfig:any;
  private editEnabled=false;
  structure: any;
  private sub: any;
  private schemas: string[];
  private myModels=[];
  private isLoaded = false;
  private isCollapsed=false; 
  source: LocalDataSource = new LocalDataSource();
  private settings = {
  };
  

  
  constructor(
    private analyticsService:AnalyticsService,
    private route: ActivatedRoute,
    private schemaService: SchemaService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private router: Router
  ) {
  }

  ngOnInit() {
   
  console.log(d);
    this.analyticsService.getModels().subscribe(res=>{
      this.myModels=res.schemas;
      console.log(this.myModels);
      this.isLoaded=true;
      this.settings = {
       
        
        columns:{
          name:{
            title:"Model Name",
            editable:false
            
          },
          schema:{
            title:"Schema Name",
            editable:false
                 
          },
          configure:{
            title:"Configure",
            editable:false,
            type:"custom",
            renderComponent:ConfigureRenderComponent
            
          }
        },
        noDataMessage:"No models created",
        actions:false
      };
     let data=this.myModels.map(item=>{return { id:item._id,name: item.name,schema:item.data.collectionName,configure:item}})
         // let data = res.data.rows;
       this.source.load(data);
    })
  }

  
  onSelectSchema(schemaName) {
    this.router.navigate(['dashboard', 'table', schemaName]);
  }
  onUserRowSelect(event){
    this.modelMainConfig=event.data;
    console.log(this.modelMainConfig);
    this.editEnabled=true;
  }

  onCreateConfirm(event): void {
    //console.log("Create confirm");
    let row = {
      schema: this.tableTitle,
      data: event.newData
    };
    this.schemaService.insertData(row).subscribe(res => {     
      //console.log(event.newData); 
      //event.newData = res.data;      
      if (res.success) {
        //console.log(event.newData);
        event.confirm.resolve();
        this.toastService.showToast(this.toastService.typeNum.success, "Hurray!!", res.message);
        this.ngOnInit();
      } else {
        event.confirm.reject();
        this.toastService.showToast(this.toastService.typeNum.error, "Oops!!", res.message);
      }
    });
  }

  onSaveConfirm(event): void {
    console.log("Save confirm");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {      
      let row = {
        schema: this.tableTitle,
        data: event.data
      };
      this.schemaService.deleteData(row).subscribe(res => {
        console.log(res);
        if (res.success) {
          event.confirm.resolve();
          this.toastService.showToast(this.toastService.typeNum.success, "Hurray!!", res.message);
          //this.ngOnInit();
        } else {
          event.confirm.reject();
          this.toastService.showToast(this.toastService.typeNum.error, "Oops!!", res.message);
        }
      });      
    } else {
      event.confirm.reject();
    }
  }
}