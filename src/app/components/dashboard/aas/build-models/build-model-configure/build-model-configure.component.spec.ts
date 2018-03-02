import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildModelConfigureComponent } from './build-model-configure.component';

describe('BuildModelConfigureComponent', () => {
  let component: BuildModelConfigureComponent;
  let fixture: ComponentFixture<BuildModelConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildModelConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildModelConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
