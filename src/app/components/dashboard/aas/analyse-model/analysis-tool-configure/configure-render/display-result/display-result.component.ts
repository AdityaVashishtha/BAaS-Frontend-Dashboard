import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.scss']
})
export class DisplayResultComponent implements OnInit {
@Input() resultObj
@Output('finalEvent') emitter:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log("LoGGING RESULTS-------------------------")
    console.log(this.resultObj);
    //this.result.result.report = this.result.result.report.replace(/\s+/g,' ').split('<br>')[2].split(' ')
  }

  sendForFinalTrain(item){
    console.log("Logging final train items")
    //console.log(item);
    alert("Are you sure to use this model for final training? Other models shall be removed and the end point will be opened corresponding to this model!!")
    this.emitter.emit(item);
  }

}
