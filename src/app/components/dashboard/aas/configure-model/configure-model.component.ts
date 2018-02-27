import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../../services/dashboard/analytics.service';


@Component({
  selector: 'app-configure-model',
  templateUrl: './configure-model.component.html',
  styleUrls: ['./configure-model.component.scss']
})
export class ConfigureModelComponent implements OnInit {
  private myModels=[];
  constructor(
    private analyticsService:AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsService.getModels().subscribe(res=>{
      this.myModels=res.schemas;
      console.log(this.myModels);
    })

  }

}
