import { TestBed, inject } from '@angular/core/testing';

import { userDataService } from './userdata.service';

describe('userDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [userDataService]
    });
  });

  it('should ...', inject([userDataService], (service: userDataService) => {
    expect(service).toBeTruthy();
  }));
});
