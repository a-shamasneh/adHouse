import { TestBed, inject } from '@angular/core/testing';

import { AddservService } from './addserv.service';

import { Http } from '@angular/http';

describe('Service : AddservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddservService,
      {provide: Http, useValue: AddservService }]
    });
  });

  it('should ...', inject([AddservService], (service: AddservService) => {
    expect(service).toBeTruthy();
  }));
});
