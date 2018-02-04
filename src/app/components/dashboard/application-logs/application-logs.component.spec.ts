import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLogsComponent } from './application-logs.component';

describe('ApplicationLogsComponent', () => {
  let component: ApplicationLogsComponent;
  let fixture: ComponentFixture<ApplicationLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
