import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { RouteHandlerService } from '../../../../services/dashboard/route-handler.service';
import { ToastService } from '../../../../services/util/toast.service';

@Component({
  selector: 'app-add-route-modal',
  templateUrl: './add-route-modal.component.html',
  styleUrls: ['./add-route-modal.component.scss']
})
export class AddRouteModalComponent implements OnInit, OnDestroy {
  private sub: any;
  private routeModel = {
    name: '',
    schemaName: '',
    operationType: 'insert',
    requestBody: [],
    constraint: [],
    accessControl: 'public',
    userBasedSession: {}
  };
  private operations = [ 'insert', 'find', 'update', 'delete', 'findById' ];
  private accessTypes = ['public','session','admin'];
  private constraints = ['equal','greater-than','less-than','regex'];
  private postOperations = ['limit','sort','max','select'];
  private isUserBasedSession: boolean;  
  private hasRequestBody: boolean;
  private schemaStructure: string;
  private requestBodyAttributeList: string[];
  private hasMatchingConstraint: boolean;
  private matchingConstraintList: any[];
  private schemaAttributeList: string[];
  private userBasedSessionList: string[];
  private userAttributeList: string[];

  // temp variables 
  private requestBodyAttribute: string ;
  private constraintCondition: string = this.constraints[0];
  private schemaAttribute: string ;

  /* Constructor here */
  constructor(  
    private route: ActivatedRoute,
    private router: Router, 
    private schemaService: SchemaService,
    private routeHandlerSevice: RouteHandlerService,
    private toastService: ToastService,
  ) {
    this.hasRequestBody = this.hasMatchingConstraint = false;
    this.requestBodyAttributeList = [];
    this.matchingConstraintList = [];
    this.userBasedSessionList = [];
   }

  /* Life Cycle Hooks */
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params)=>{
      this.routeModel.schemaName = params.get('schemaName');
      this.schemaService.getSchemaData(this.routeModel.schemaName).subscribe((res)=>{
        this.schemaAttributeList = Object.keys(res.data.structure);
        this.schemaAttribute = this.schemaAttributeList[0];
        this.schemaStructure = JSON.stringify(res.data.structure);
      });
      this.schemaService.getSchemaStructure('authuser').subscribe((res)=>{        
        this.userAttributeList = Object.keys(res.data.structure);        
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();    
  }  
  /* Life Cycle Hooks */

  /* Functions Start Here */
  addRoute() {
    this.routeModel.requestBody = this.requestBodyAttributeList;    
    this.routeModel.constraint = this.matchingConstraintList.map(item=>{
      return JSON.parse(item);
    });
    this.routeModel.userBasedSession = {
      isEnable: this.isUserBasedSession,
      sessionAttribute: this.userBasedSessionList
    }
    console.log(this.routeModel);
    this.routeHandlerSevice.addRoute(this.routeModel).subscribe(res=>{
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray !!",res.message);
        this.router.navigate(["../"], {relativeTo: this.route});
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
  }

  addInRequestBody(e){
    let isPresent = this.requestBodyAttributeList.indexOf(e.value);
    //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
    if(isPresent>=0 || e.value.toString().length === 0 )      
      alert("Unique values only!!");
    else {
      this.requestBodyAttributeList.push(e.value);
      this.requestBodyAttribute = e.value;
    }        
  }

  removeAttribute(i) {
    let index = this.requestBodyAttributeList.indexOf(i);
    if(index>=0) {
      this.requestBodyAttributeList.splice(index,1);
    }
  }

  addInSessionBody(e) {    
    let isPresent = this.userBasedSessionList.indexOf(e.value);    
    if(isPresent>=0 || e.value.toString().length === 0 )      
      alert("Unique values only!!");
    else {      
      this.userBasedSessionList.push(e.value);  
      this.userAttributeList.splice(this.userAttributeList.indexOf(e.value),1);    
    } 
  }

  removeInSessionBody(i) {
    let index = this.userBasedSessionList.indexOf(i);
    if(index>=0) {
      this.userBasedSessionList.splice(index,1);
    }
  }

  addMatchingConstraint() {
    let matchingConstraint = {
      schemaAttribute: this.schemaAttribute,
      requestAttribute: this.requestBodyAttribute,
      constraint: this.constraintCondition
    }
    let isPresent = this.matchingConstraintList.indexOf(JSON.stringify(matchingConstraint));  
    //console.log(isPresent);
    if(isPresent>=0)      
      alert("Unique constraints only!!");
    else {
      this.matchingConstraintList.push(JSON.stringify(matchingConstraint)); 
      //console.log(matchingConstraint)
    }
  }

  removeMatchingConstraint(item) {
    let index = this.matchingConstraintList.indexOf(item);
    //console.log(index);
    if(index != -1) {
      this.matchingConstraintList.splice(index,1);
      console.log(this.matchingConstraintList);
    }
  }

}
