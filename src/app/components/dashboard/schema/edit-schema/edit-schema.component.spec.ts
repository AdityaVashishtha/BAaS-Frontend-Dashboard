import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchemaComponent } from './edit-schema.component';

describe('EditSchemaComponent', () => {
  let component: EditSchemaComponent;
  let fixture: ComponentFixture<EditSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
