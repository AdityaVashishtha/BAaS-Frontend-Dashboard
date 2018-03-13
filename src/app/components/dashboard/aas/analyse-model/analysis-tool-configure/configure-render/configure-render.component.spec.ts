import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureRenderComponent } from './configure-render.component';

describe('ConfigureRenderComponent', () => {
  let component: ConfigureRenderComponent;
  let fixture: ComponentFixture<ConfigureRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
