import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeConfigComponent } from './attribute-config.component';

describe('AttributeConfigComponent', () => {
  let component: AttributeConfigComponent;
  let fixture: ComponentFixture<AttributeConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
