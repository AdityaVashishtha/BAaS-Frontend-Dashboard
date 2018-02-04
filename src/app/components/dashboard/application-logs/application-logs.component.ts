import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';

@Component({
  selector: 'app-application-logs',
  templateUrl: './application-logs.component.html',
  styleUrls: ['./application-logs.component.scss']
})
export class ApplicationLogsComponent implements OnInit {
  private logs: any[];
  constructor(
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.configurationService.getAllLogs().subscribe(res=>{
      this.logs = res.logs;
    });
  }

}
