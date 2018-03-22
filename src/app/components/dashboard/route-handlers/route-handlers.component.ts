import { Component, OnInit } from '@angular/core';
import { AddRouteModalComponent } from './add-route-modal/add-route-modal.component';
import { RouteHandlerService } from '../../../services/dashboard/route-handler.service';
import { ActivatedRoute } from '@angular/router';
import { SchemaService } from '../../../services/dashboard/schema.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/util/toast.service';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';

@Component({
  selector: 'app-route-handlers',
  templateUrl: './route-handlers.component.html',
  styleUrls: ['./route-handlers.component.scss']
})
export class RouteHandlersComponent implements OnInit {
  /* Variable Declaration Zone */
  private schemaName: string;
  private routes: any[];
  private schemaStructure: {};
  private schemaList: any[];
  private appConfig: {};
  constructor(
    private activatedRoutes: ActivatedRoute,
    private routeHandlerService: RouteHandlerService,
    private schemaService: SchemaService,
    private router: Router,
    private toastService: ToastService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(params => {
      this.schemaName = params.get('schemaName');
      this.schemaService.getSchemas().subscribe(response=>{
        this.schemaList = response.schemas;
        if (this.schemaName === null)
          this.router.navigate(["./",response.schemas[0].name], {relativeTo: this.activatedRoutes});
        else {
          this.routeHandlerService.getRoutesOfSchema({ schemaName: this.schemaName })
          .subscribe(res => {
            console.log(res);
            this.configurationService.getApplicationDetails().subscribe(conf=>{
              console.log(conf)
              this.appConfig = conf.config;
            });
            this.routes = res.data;
            this.schemaService.getSchemaStructure(this.schemaName).subscribe(resp=>{
              this.schemaStructure = resp.data.structure;
            });
          });
        }        
      });      
    });    
  }

  onSelectSchema(schemaName) {
    this.router.navigate(['dashboard', 'api-access', schemaName]);
  }

  getClassByOpertaionType(operation){
    switch(operation){
      case 'insert': return 'success';
      case 'update': return 'primary';
      case 'find': return 'info';
      case 'delete': return 'danger';
      default: return 'warning';
    }
  }
  
  deleteRoute(routeName) {
    let route = { 
      name: routeName,
      schemaName: this.schemaName
    };
    this.routeHandlerService.deleteRoute(route).subscribe(res=>{
      console.log(res);
      if(res.success) {        
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray !!",res.message);
        this.ngOnInit();
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
  }


  convertToString(item) {
    return JSON.stringify(item,null,2);//.replace(/,/gi, ", \n\t").trim();
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

