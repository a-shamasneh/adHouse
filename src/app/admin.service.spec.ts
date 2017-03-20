import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';

import { Http } from '@angular/http';

describe('Service : AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService,
      {provide: Http, useValue: AdminService }]
    });
  });

  it('should ...', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});
