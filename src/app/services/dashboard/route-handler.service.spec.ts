import { TestBed, inject } from '@angular/core/testing';

import { RouteHandlerService } from './route-handler.service';

describe('RouteHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteHandlerService]
    });
  });

  it('should be created', inject([RouteHandlerService], (service: RouteHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
