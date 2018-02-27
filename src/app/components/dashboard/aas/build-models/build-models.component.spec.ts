import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildModelsComponent } from './build-models.component';

describe('BuildModelsComponent', () => {
  let component: BuildModelsComponent;
  let fixture: ComponentFixture<BuildModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
