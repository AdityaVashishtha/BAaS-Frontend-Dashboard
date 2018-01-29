import { Component, OnInit } from '@angular/core';
import { ConfigurationService  } from '../../../services/dashboard/configuration.service'
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  private appDetails: any;
  
  constructor(
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.appDetails= { database: {}};
    this.configurationService.getApplicationDetails().subscribe(res=>{
      //console.log(res.config);
      this.appDetails = res.config;      
    });
  }

}
