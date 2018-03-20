import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MltaskComponent } from './mltask.component';

describe('MltaskComponent', () => {
  let component: MltaskComponent;
  let fixture: ComponentFixture<MltaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MltaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
