import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRouteModalComponent } from './add-route-modal.component';

describe('AddRouteModalComponent', () => {
  let component: AddRouteModalComponent;
  let fixture: ComponentFixture<AddRouteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRouteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRouteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
