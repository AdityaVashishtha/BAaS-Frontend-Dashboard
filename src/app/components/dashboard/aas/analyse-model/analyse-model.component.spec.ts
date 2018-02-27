import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseModelComponent } from './analyse-model.component';

describe('AnalyseModelComponent', () => {
  let component: AnalyseModelComponent;
  let fixture: ComponentFixture<AnalyseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
