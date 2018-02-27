import { Component, OnInit,Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'app-configure-render',
  templateUrl: './configure-render.component.html',
  styleUrls: ['./configure-render.component.scss']
})
export class ConfigureRenderComponent implements ViewCell,OnInit {
  renderValue:string;
  @Input() value: string | number;
  @Input() rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue="Configure"

  }

}
