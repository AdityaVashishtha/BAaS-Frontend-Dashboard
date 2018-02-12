import { Component, OnInit,  AfterViewInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-usage-line-chart',
  template: `<div echarts [options]="options" class="echart"></div>`,
  styleUrls: ['./usage-line-chart.component.scss']
})
export class UsageLineChartComponent implements OnInit ,AfterViewInit, OnDestroy {

  options: any = {};
  themeSubscription: any;

  constructor(
    private theme: NbThemeService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Chart View start
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.info],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['User Count', 'Dummy'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.info,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Count  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '110',
              '1000',
              '90',
              '80',
              '70',
              '60',
              '50',
              '40',
              '30',
              '20',
              '10',
              '0',
            ],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    'Count  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: [
              '110',
              '100',
              '90',
              '80',
              '70',
              '60',
              '50',
              '40',
              '30',
              '20',
              '10',
              '0',
            ],
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
            name: 'User Count',
            type: 'line',
            xAxisIndex: 1,
            smooth: false,
            data: [5, 9, 0, 26, 8, 77, 156, 18, 48, 18, 6, 23],
          },
          {
            name: 'Hit Count',
            type: 'line',
            smooth: false,
            data: [39, 59, 111, 187, 83, 9, 21, 46, 55, 84, 103, 70],
          },
        ],
      };
    });
    // Chart View End
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
