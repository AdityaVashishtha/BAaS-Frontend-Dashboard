import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSubsectionComponent } from './panel-subsection.component';

describe('PanelSubsectionComponent', () => {
  let component: PanelSubsectionComponent;
  let fixture: ComponentFixture<PanelSubsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSubsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
