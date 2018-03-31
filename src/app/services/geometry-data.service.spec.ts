import { TestBed, inject } from '@angular/core/testing';

import { GeometryDataService } from './geometry-data.service';

describe('GeometryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeometryDataService]
    });
  });

  it('should be created', inject([GeometryDataService], (service: GeometryDataService) => {
    expect(service).toBeTruthy();
  }));
});
