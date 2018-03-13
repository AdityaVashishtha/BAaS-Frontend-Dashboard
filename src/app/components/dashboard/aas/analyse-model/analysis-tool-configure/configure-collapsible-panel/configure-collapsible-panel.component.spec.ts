import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureCollapsiblePanelComponent } from './configure-collapsible-panel.component';

describe('ConfigureCollapsiblePanelComponent', () => {
  let component: ConfigureCollapsiblePanelComponent;
  let fixture: ComponentFixture<ConfigureCollapsiblePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureCollapsiblePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureCollapsiblePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
