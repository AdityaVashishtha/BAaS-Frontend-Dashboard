import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDetailCardComponent } from './schema-detail-card.component';

describe('SchemaDetailCardComponent', () => {
  let component: SchemaDetailCardComponent;
  let fixture: ComponentFixture<SchemaDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
