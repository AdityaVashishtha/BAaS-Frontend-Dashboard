import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationAlgorithmComponent } from './classification-algorithm.component';

describe('ClassificationAlgorithmComponent', () => {
  let component: ClassificationAlgorithmComponent;
  let fixture: ComponentFixture<ClassificationAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
