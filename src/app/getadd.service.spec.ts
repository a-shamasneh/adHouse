import { TestBed, inject } from '@angular/core/testing';

import { GetaddService } from './getadd.service';

import { Http } from '@angular/http';

describe('Service : GetaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetaddService,
      {provide: Http, useValue: GetaddService }]
    });
  });

  it('should ...', inject([GetaddService], (service: GetaddService) => {
    expect(service).toBeTruthy();
  }));
});
