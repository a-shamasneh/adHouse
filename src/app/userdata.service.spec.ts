import { TestBed, inject } from '@angular/core/testing';

import { userDataService } from './userdata.service';
////////////////////////////////////////////////////////
import { Http } from '@angular/http';
/////////////////////////////////////////
describe('Service:userDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [userDataService,
       {provide: Http, useValue: userDataService }]
    });
  });

  it('should ...', inject([userDataService], (service: userDataService) => {
    expect(service).toBeTruthy();
  }));
});
