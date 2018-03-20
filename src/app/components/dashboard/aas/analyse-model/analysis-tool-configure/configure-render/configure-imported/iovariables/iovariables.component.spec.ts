import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IovariablesComponent } from './iovariables.component';

describe('IovariablesComponent', () => {
  let component: IovariablesComponent;
  let fixture: ComponentFixture<IovariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IovariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IovariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
