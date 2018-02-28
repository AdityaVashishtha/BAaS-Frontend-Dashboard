import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-subsection',
  templateUrl: './panel-subsection.component.html',
  styleUrls: ['./panel-subsection.component.scss']
})
export class PanelSubsectionComponent implements OnInit {
  @Input() subsectionContents:any;
  @Input() attributesList:any;
  
   
  constructor() { }

  ngOnInit() {
    console.log("logging subsecion contents");
    console.log(this.subsectionContents);
    console.log(this.attributesList);
    this.prepareInputFields();
  }

  prepareInputFields(){
    if(!this.subsectionContents.forEach){
      
    }
    else{
      //TODO this part 
    }
  }

}
