import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureImportedComponent } from './configure-imported.component';

describe('ConfigureImportedComponent', () => {
  let component: ConfigureImportedComponent;
  let fixture: ComponentFixture<ConfigureImportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureImportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureImportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
