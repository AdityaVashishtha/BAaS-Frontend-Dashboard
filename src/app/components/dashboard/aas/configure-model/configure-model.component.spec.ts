import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureModelComponent } from './configure-model.component';

describe('ConfigureModelComponent', () => {
  let component: ConfigureModelComponent;
  let fixture: ComponentFixture<ConfigureModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
