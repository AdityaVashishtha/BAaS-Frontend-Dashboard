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
import { send } from 'q';
import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  private requestObject=`
  {
    "analyticsName": "balanceDataset",
    "test": {
      "inputs": [
        {
          "LeftWeight": "3",
          "LeftDistance": "2",
          "RightWeight": "1",
          "RightDistance": "1"
        },
        {
          "LeftWeight": "1",
          "LeftDistance": "1",
          "RightWeight": "2",
          "RightDistance": "3"
        }
        ]
    }
  }`;
  closeResult: string;

  private selectedObject;
  private settings = {
  };
  private aasJSON: any;

  private configurationItem={};
  private aasReply = {
    name: "",
    data: {
      collectionName: "",
      collectionAttributes:{}
    },
    structure: {}
  };

private isresultReady:boolean;

private resultObject={};

  constructor(
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute,
    private schemaService: SchemaService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private router: Router,    
  ) {
  }

  ngOnInit() {
    this.editEnabled = false;
    this.isresultReady=false; 
    this.isLoaded = false;
  
    this.isCollapsed = false;
    
    this.analyticsService.getModels().subscribe(res => {
      this.myModels = res.schemas;
      console.log(this.myModels);
      this.isLoaded = true;
      // this.settings = {


      //   columns: {
      //     name: {
      //       title: "Model Name",
      //       editable: false

      //     },
      //     schema: {
      //       title: "Schema Name",
      //       editable: false

      //     },
      //     configure: {
      //       title: "Configure",
      //       editable: false,
      //       type: "custom",
      //       renderComponent: ConfigureRenderComponent

      //     }
      //   },
      //   noDataMessage: "No models created",
      //   actions: false
      // };
      // let data = this.myModels.map(item => { return { id: item._id, name: item.name, schema: item.data.collectionName, configure: item } })
      // this.source.load(data);
    })

    //Fetching the aasJSON object from the node backend
    // this.analyticsService.getAasJSON().subscribe(res => {
    //   this.aasJSON = res;

    // });
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

  // processAasJSON() {
  //   this.aasJSON.array.forEach(element => {
  //     //create accordion panel
  //     // get its configuration items
  //     //generate parameters table
  //   });
  // }

  // receiveExpectation(event) {
  //   console.log(event);
  //   console.log("Receiving expectations from analysis-tool-configure");
  //   this.aasReply.settings[event.identifier] = event.content;
  //   console.log(this.aasReply);
  // }

  sendConfiguration($event){
    console.log($event);
    this.aasReply.structure=$event;

    console.log( `Final AAS Reply`)
    console.log(this.aasReply);
    this.analyticsService.sendModelConfiguration(this.aasReply).subscribe(res=>{
      console.log("Logging reply")
      console.log(res);
      if(res.success){
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!","Configuration saved successfully!")
        this.ngOnInit();
      }
     
    })
  }
  private updateAasReply(item){
    console.log(item);
    this.editEnabled = true;
    this.aasReply.name = item.name;
    this.aasReply.data = item.data;

  }

  private startTraining(item){
    console.log(item);
    let sendItem={
      'analyticsName':item.name
    }
    
    this.analyticsService.startTraining(sendItem).subscribe(res=>{
      if(res.success){
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!","Training started.Check back after sometime to see the result");
        this.ngOnInit();
      }
    })
  }

  private showResult(item){
    console.log(item);
    this.selectedObject=item;
    this.isresultReady=true;
    this.resultObject=item.structure.mltask;
    
  }

  private sendForFinalTrain(event){
    console.log(event);
    console.log("Logging final model");
    event['final']=true;
    this.selectedObject.structure.mltask.algoParams.push(event);
    this.analyticsService.sendModelConfiguration(this.selectedObject).subscribe(res=>{
      console.log("LOGGING FINAL MODEL REPLY");
      console.log(res);
      let sendItem={
        'analyticsName':this.selectedObject.name
      }
      this.analyticsService.startFinalTraining(sendItem).subscribe(res=>{
        console.log("LOGGING AFTER STARTING FINAL TRAINING ")
        console.log(res);
        if(res.success){
          this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!","Final Training on the model has started.Check back after sometime to see the result");
          this.ngOnInit();
        }
        else{
          this.toastService.showToast(this.toastService.typeNum.error,"ERROR!!",res.message);
          this.ngOnInit();
        }
      })
    })
    console.log(this.selectedObject)
  }

  showError(item){
    this.toastService.showToast(this.toastService.typeNum.error,"ERROR",item.error); 
  }

  //Route details modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'text-warning';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'text-primary';
            } else {
                cls = 'text-warning';
            }
        } else if (/true|false/.test(match)) {
            cls = 'text-info';
        } else if (/null/.test(match)) {
            cls = 'text-danger';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }

}