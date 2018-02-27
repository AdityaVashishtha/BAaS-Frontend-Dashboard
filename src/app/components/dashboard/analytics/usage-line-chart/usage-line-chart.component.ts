import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ConfigurationService } from '../../../../services/dashboard/configuration.service';
import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-usage-line-chart',
  template: `<div echarts [options]="options" class="echart"></div>`,
  styleUrls: ['./usage-line-chart.component.scss']
})
export class UsageLineChartComponent implements OnInit, AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;
  private userHitRecordRefreshInterval = 10000;

  constructor(
    private theme: NbThemeService,
    private configService: ConfigurationService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      TimerObservable.create(0, this.userHitRecordRefreshInterval)
        .subscribe(() => {
          this.configService.getUserHitCounts()
            .subscribe((res) => {
              this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    label: {
                      backgroundColor: echarts.tooltipBackgroundColor,
                    },
                  },
                },
                legend: {
                  data: ['API request count'],
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true,
                },
                xAxis: [
                  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['210 sec', '200 sec', '190 sec', '180 sec', '170 sec', '160 sec', '150 sec', '140 sec', '130 sec', '120 sec', '110 sec', '100 sec', '90 sec', '80 sec', '70 sec', '60 sec','50 sec','40 sec','30 sec','20 sec','10 sec'],
                    axisTick: {
                      alignWithLabel: true,
                    },
                    axisPointer: {
                      label: {
                        formatter: params => {
                          return (
                            '' + params.value + ' before'
                          );
                        },
                      },
                    },
                    axisLine: {
                      lineStyle: {
                        color: echarts.axisLineColor,
                      },
                    },
                    axisLabel: {
                      textStyle: {
                        color: echarts.textColor,
                      },
                    },
                  },
                ],
                yAxis: [
                  {
                    type: 'value',
                    axisLine: {
                      lineStyle: {
                        color: echarts.axisLineColor,
                      },
                    },
                    splitLine: {
                      lineStyle: {
                        color: echarts.splitLineColor,
                      },
                    },
                    axisLabel: {
                      textStyle: {
                        color: echarts.textColor,
                      },
                    },
                  },
                ],
                series: [
                  {
                    name: 'API request count',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: res.count,
                  },
                ],
              };

            });
        });
    });
    // Chart View End
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
