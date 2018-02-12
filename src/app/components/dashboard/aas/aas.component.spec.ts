import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AasComponent } from './aas.component';

describe('AasComponent', () => {
  let component: AasComponent;
  let fixture: ComponentFixture<AasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
