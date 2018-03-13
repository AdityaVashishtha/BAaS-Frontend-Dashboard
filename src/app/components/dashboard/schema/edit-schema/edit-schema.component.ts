import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemaService } from '../../../../services/dashboard/schema.service';
import { ToastService } from '../../../../services/util/toast.service';

@Component({
  selector: 'app-edit-schema',
  templateUrl: './edit-schema.component.html',
  styleUrls: ['./edit-schema.component.scss']
})
export class EditSchemaComponent implements OnInit, OnDestroy {

  private routerServiceSubcription: any;  
  private schemaName: string;
  private schemaStructure: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schemaService: SchemaService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.routerServiceSubcription = this.activatedRoute.paramMap.subscribe(params => {
      this.schemaName = params.get('schemaName');
      this.schemaService.getSchemaStructure(this.schemaName).subscribe(res => {
        this.schemaStructure = [];
        Object.keys(res.data.structure).forEach(element => {          
          if(!(element.charAt(0) == '_') && (res.data.structure[element].name) )
            this.schemaStructure.push(res.data.structure[element]);
        });
      });
    });    
  }

  ngOnDestroy() {
    this.routerServiceSubcription.unsubscribe();
  }

  saveSchemaStructure() {
    let data = {
      schemaName: this.schemaName,
      structure: this.schemaStructure
    };        
    this.schemaService.editSchemaStructure(data).subscribe(res=>{
      if(res.success) {
        this.toastService
          .showToast(this.toastService.typeNum.success,"Hurray!!",res.message);
      } else {
        this.toastService
          .showToast(this.toastService.typeNum.error,"Oops!!",res.message);
      }
    });
  }

  removeDone(res) {    
    if (res.success) {
      this.toastService
        .showToast(this.toastService.typeNum.success, "Hurray!!", res.message);          
        this.ngOnInit();
    } else {
      this.toastService
        .showToast(this.toastService.typeNum.error, "Oops!!", res.message);        
    }    
  }

}
