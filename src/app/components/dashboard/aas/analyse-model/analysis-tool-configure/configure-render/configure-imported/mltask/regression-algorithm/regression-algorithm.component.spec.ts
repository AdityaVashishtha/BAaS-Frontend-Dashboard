import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionAlgorithmComponent } from './regression-algorithm.component';

describe('RegressionAlgorithmComponent', () => {
  let component: RegressionAlgorithmComponent;
  let fixture: ComponentFixture<RegressionAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
