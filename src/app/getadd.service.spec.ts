import { TestBed, inject } from '@angular/core/testing';

import { GetaddService } from './getadd.service';

describe('GetaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetaddService]
    });
  });

  it('should ...', inject([GetaddService], (service: GetaddService) => {
    expect(service).toBeTruthy();
  }));
});
