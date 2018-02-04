import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageLineChartComponent } from './usage-line-chart.component';

describe('UsageLineChartComponent', () => {
  let component: UsageLineChartComponent;
  let fixture: ComponentFixture<UsageLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
