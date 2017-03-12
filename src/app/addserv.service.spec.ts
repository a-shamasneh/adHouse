import { TestBed, inject } from '@angular/core/testing';

import { AddservService } from './addserv.service';

describe('AddservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddservService]
    });
  });

  it('should ...', inject([AddservService], (service: AddservService) => {
    expect(service).toBeTruthy();
  }));
});
