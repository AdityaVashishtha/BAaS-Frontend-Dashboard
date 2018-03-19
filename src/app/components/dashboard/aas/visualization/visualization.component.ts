import { Component, OnInit } from '@angular/core';
import { SchemaService } from '../../../../services/dashboard/schema.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  private graphType='';
  private schemaName='';
  private xAttribute='';
  private yAttribute='';
  private schemas=[];
  private attributeList=[];
  private graphTypes=['bar','scatter'];

  constructor(
    private schemaService: SchemaService
  ) { }

  ngOnInit() {
    this.schemaService.getSchemas().subscribe(res=>{
      this.schemas = res.schemas;
    });
  }

  getAttributes(){
    console.log("res");
    this.schemaService.getSchemaStructure(this.schemaName).subscribe(res=>{
      console.log(res);
      this.attributeList = Object.keys(res.data.structure);
      console.log(this.attributeList)
    });
  }

}
