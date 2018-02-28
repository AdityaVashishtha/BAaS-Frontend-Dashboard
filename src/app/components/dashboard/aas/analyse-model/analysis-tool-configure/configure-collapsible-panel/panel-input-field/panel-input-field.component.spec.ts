import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInputFieldComponent } from './panel-input-field.component';

describe('PanelInputFieldComponent', () => {
  let component: PanelInputFieldComponent;
  let fixture: ComponentFixture<PanelInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
