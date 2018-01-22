import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHandlersComponent } from './route-handlers.component';

describe('RouteHandlersComponent', () => {
  let component: RouteHandlersComponent;
  let fixture: ComponentFixture<RouteHandlersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteHandlersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
