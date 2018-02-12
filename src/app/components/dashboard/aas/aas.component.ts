import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../services/dashboard/analytics.service';

@Component({
  selector: 'app-aas',
  templateUrl: './aas.component.html',
  styleUrls: ['./aas.component.scss']
})
export class AasComponent implements OnInit {
  private algorithmList = ['NN','SVM'];
  private aasSettings = {
    normalization: false,
    name: '',
    algorithm: 'NN',
  }
  constructor(
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.analyticsService.createModel(this.aasSettings).subscribe(res => {
      console.log(res);
    }); 
  }
}
