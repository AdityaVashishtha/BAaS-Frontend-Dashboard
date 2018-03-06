import { Output, Input, Component, OnInit, EventEmitter } from '@angular/core';
import { PanelSubsectionComponent } from './panel-subsection/panel-subsection.component';
@Component({
  selector: 'app-configure-collapsible-panel',
  templateUrl: './configure-collapsible-panel.component.html',
  styleUrls: ['./configure-collapsible-panel.component.scss']
})
export class ConfigureCollapsiblePanelComponent implements OnInit {
  @Input() panelContents: any;
  @Input() attributesList: any;
  @Output() expectationEvent = new EventEmitter<any>();
  public isCollapsed = false;
  private useDefaults = true;
  private expectations;

  constructor() { }

  ngOnInit() {
    let hasDefaults=this.panelContents.hasDefaults || false;
   // console.log(`Has defaults for ${this.panelContents.name} is `+hasDefaults);
    if(!hasDefaults)
      this.useDefaults=false;
    //console.log("use defualts is "+this.useDefaults);
  }
  generateExpectation() {
    console.log(this.panelContents);
    console.log("There were the panelContent")
    if (this.useDefaults) {
      this.expectations = {
        "identifier":this.panelContents.expectation.identifier,
        "content": {
          "default": "true"
        }

      }
      //console.log("I came here");
      this.expectationEvent.emit(this.expectations);
    }
    else {
      //TODO add code for parameter generations
    }
    this.isCollapsed=true;
  }
  receiveExpectation(event) {
    console.log("Receiving expectations from configure-collapsible");
    console.log(event);
    // this.aasReply[event.identifier] = event.content;
    // console.log(this.aasReply);
    // this.expectationEvent.emit(this.aasReply);
  }
}
