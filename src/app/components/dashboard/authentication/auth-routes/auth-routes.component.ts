import { Component, OnInit } from '@angular/core';
import { RouteHandlerService } from '../../../../services/dashboard/route-handler.service';
import { ActivatedRoute } from '@angular/router';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../services/util/toast.service';
import { ConfigurationService } from '../../../../services/dashboard/configuration.service';

@Component({
  selector: 'app-auth-routes',
  templateUrl: './auth-routes.component.html',
  styleUrls: ['./auth-routes.component.scss']
})
export class AuthRoutesComponent implements OnInit {

  /* Variable Declaration Zone */
  private schemaName: string;
  private routes: any[];
  private schemaStructure: {};
  private appConfig = {};

  private exampleRequest = {
    register: {
      request: `{
        "user" : {
          "username" : "username/email",
          "password" : "string"
        }
      }`,
      response: `{        
        "success": "true/false"        
        "message" : "MSG"
    }`
    },
    login: {
      request: `{
        "user" : {
          "username" : "username/email",
          "password" : "string"
        }
      }` ,
      response: `{        
          "success": "true/false",
          "token": "Bearer token",
          "data" : { "user": "info" }        
      }`
    },
    googleLogin: {
      request: `
        Hit this api link and it will redirect
        to google authentication and
        return response.
      `,
      response: `{
        "success": "true/false",
        "token": "Bearer token",
        "user": "user session object",
        "data" : { "user": "info" }
      }`
    },
    facebookLogin: {
      request: `
        Hit this api link and it will redirect
        to facebook authentication and
        return response.
      `,
      response: `{
        "success": "true/false"
        "token": "Bearer token",
        "user": "user session object",
        "data" : { "user": "info" }
      }`
    }
  }

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
      this.schemaName = 'authuser';
      this.routeHandlerService.getRoutesOfSchema({
        schemaName: this.schemaName
      })
        .subscribe(res => {
          console.log(res);
          this.configurationService.getApplicationDetails().subscribe(conf=>{
            this.appConfig = conf.config;
          });
          this.routes = res.data;
          this.schemaService.getSchemaStructure(this.schemaName).subscribe(resp => {
            this.schemaStructure = resp.data.structure;
          });
        });
    });
  }

  onSelectSchema(schemaName) {
    this.router.navigate(['dashboard', 'api-access', schemaName]);
  }

  getClassByOpertaionType(operation) {
    switch (operation) {
      case 'insert':
        return 'success';
      case 'update':
        return 'primary';
      case 'find':
        return 'info';
      case 'delete':
        return 'danger';
      default:
        return 'warning';
    }
  }

  deleteRoute(routeName) {
    let route = {
      name: routeName,
      schemaName: this.schemaName
    };
    this.routeHandlerService.deleteRoute(route).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.toastService.showToast(this.toastService.typeNum.success, "Hurray !!", res.message);
        this.ngOnInit();
      } else {
        this.toastService.showToast(this.toastService.typeNum.error, "Oops!!", res.message);
      }
    });
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