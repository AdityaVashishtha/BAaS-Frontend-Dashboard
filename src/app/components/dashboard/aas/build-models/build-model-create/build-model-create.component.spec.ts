import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildModelCreateComponent } from './build-model-create.component';

describe('BuildModelCreateComponent', () => {
  let component: BuildModelCreateComponent;
  let fixture: ComponentFixture<BuildModelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildModelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildModelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
