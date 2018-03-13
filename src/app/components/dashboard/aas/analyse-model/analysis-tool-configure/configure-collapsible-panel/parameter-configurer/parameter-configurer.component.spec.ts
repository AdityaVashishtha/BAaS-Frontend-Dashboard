import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterConfigurerComponent } from './parameter-configurer.component';

describe('ParameterConfigurerComponent', () => {
  let component: ParameterConfigurerComponent;
  let fixture: ComponentFixture<ParameterConfigurerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterConfigurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterConfigurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
