import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.scss']
})
export class DisplayResultComponent implements OnInit {
@Input() resultObj
  constructor() { }

  ngOnInit() {
    console.log("LoGGING RESULTS-------------------------")
    console.log(this.resultObj);
    //this.result.result.report = this.result.result.report.replace(/\s+/g,' ').split('<br>')[2].split(' ')
  }

}
