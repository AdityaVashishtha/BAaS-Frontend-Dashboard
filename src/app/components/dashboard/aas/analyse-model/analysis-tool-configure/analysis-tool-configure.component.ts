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
import { ConfigureRenderComponent } from "./configure-render/configure-render.component";
import { ConfigureCollapsiblePanelComponent } from "./configure-collapsible-panel/configure-collapsible-panel.component"



@Component({
  selector: 'app-analysis-tool-configure',
  templateUrl: './analysis-tool-configure.component.html',
  styleUrls: ['./analysis-tool-configure.component.scss']
})
export class AnalysisToolConfigureComponent implements OnInit {

  tableTitle: String;
  private modelMainConfig: any;
  private editEnabled = false;
  structure: any;
  private sub: any;
  private schemas: string[];
  private myModels = [];
  private isLoaded = false;
  private isCollapsed = false;
  private attributeList;
  source: LocalDataSource = new LocalDataSource();
  private settings = {
  };
  private aasJSON: any;
  private aasReply = {
    name: "",
    data: {},
    settings: {}
  };


  constructor(
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute,
    private schemaService: SchemaService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private router: Router
  ) {
  }

  ngOnInit() {


    this.analyticsService.getModels().subscribe(res => {
      this.myModels = res.schemas;
      console.log(this.myModels);
      this.isLoaded = true;
      this.settings = {


        columns: {
          name: {
            title: "Model Name",
            editable: false

          },
          schema: {
            title: "Schema Name",
            editable: false

          },
          configure: {
            title: "Configure",
            editable: false,
            type: "custom",
            renderComponent: ConfigureRenderComponent

          }
        },
        noDataMessage: "No models created",
        actions: false
      };
      let data = this.myModels.map(item => { return { id: item._id, name: item.name, schema: item.data.collectionName, configure: item } })
      this.source.load(data);
    })

    //Fetching the aasJSON object from the node backend
    this.analyticsService.getAasJSON().subscribe(res => {

      this.aasJSON = res;

    });
  }



  onUserRowSelect(event) {
    this.modelMainConfig = event.data;
    console.log(this.modelMainConfig);
    this.editEnabled = true;
    console.log("Loggin aasReply")
    this.aasReply.name = this.modelMainConfig.configure.name;
    this.aasReply.data = this.modelMainConfig.configure.data;
    console.log(this.aasReply);
    this.attributeList=Object.keys(this.modelMainConfig.configure.data.collectionAttributes).map(item=>{return {'name':item,'type':this.modelMainConfig.configure.data.collectionAttributes[item]}})
  }

  processAasJSON() {
    this.aasJSON.array.forEach(element => {
      //create accordion panel
      // get its configuration items
      //generate parameters table
    });
  }

  receiveExpectation(event) {
    console.log(event);
    console.log("Receiving expectations from analysis-tool-configure");
    this.aasReply.settings[event.identifier] = event.content;
    console.log(this.aasReply);
  }



}