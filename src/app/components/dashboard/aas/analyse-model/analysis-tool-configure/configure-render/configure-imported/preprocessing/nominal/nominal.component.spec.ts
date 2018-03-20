import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominalComponent } from './nominal.component';

describe('NominalComponent', () => {
  let component: NominalComponent;
  let fixture: ComponentFixture<NominalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
