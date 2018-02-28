import { Input,Component, OnInit } from '@angular/core';
import { PanelSubsectionComponent} from './panel-subsection/panel-subsection.component';
@Component({
  selector: 'app-configure-collapsible-panel',
  templateUrl: './configure-collapsible-panel.component.html',
  styleUrls: ['./configure-collapsible-panel.component.scss']
})
export class ConfigureCollapsiblePanelComponent implements OnInit {
  @Input() panelContents:any;
  @Input() attributesList:any;
 public isCollapsed = false;
  constructor() { }

  ngOnInit() {
    console.log(this.panelContents);
    // console.log(this.attributesList)
  }

}
