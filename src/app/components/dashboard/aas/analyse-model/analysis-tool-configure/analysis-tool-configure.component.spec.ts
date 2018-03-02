import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisToolConfigureComponent } from './analysis-tool-configure.component';

describe('AnalysisToolConfigureComponent', () => {
  let component: AnalysisToolConfigureComponent;
  let fixture: ComponentFixture<AnalysisToolConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisToolConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisToolConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
