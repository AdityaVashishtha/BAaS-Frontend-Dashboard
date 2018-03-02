import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisToolCreateComponent } from './analysis-tool-create.component';

describe('AnalysisToolCreateComponent', () => {
  let component: AnalysisToolCreateComponent;
  let fixture: ComponentFixture<AnalysisToolCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisToolCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisToolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
