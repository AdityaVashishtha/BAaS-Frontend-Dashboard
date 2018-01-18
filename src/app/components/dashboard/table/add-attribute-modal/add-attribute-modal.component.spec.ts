import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributeModalComponent } from './add-attribute-modal.component';

describe('AddAttributeModalComponent', () => {
  let component: AddAttributeModalComponent;
  let fixture: ComponentFixture<AddAttributeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttributeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttributeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
