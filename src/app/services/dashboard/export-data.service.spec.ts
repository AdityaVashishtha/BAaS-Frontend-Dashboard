import { TestBed, inject } from '@angular/core/testing';

import { ExportDataService } from './export-data.service';

describe('ExportDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportDataService]
    });
  });

  it('should be created', inject([ExportDataService], (service: ExportDataService) => {
    expect(service).toBeTruthy();
  }));
});
