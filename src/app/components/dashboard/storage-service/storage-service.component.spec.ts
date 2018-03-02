import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageServiceComponent } from './storage-service.component';

describe('StorageServiceComponent', () => {
  let component: StorageServiceComponent;
  let fixture: ComponentFixture<StorageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
