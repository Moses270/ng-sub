import { TestBed } from '@angular/core/testing';

import { NgSubService } from './ng-sub.service';

describe('NgSubService', () => {
  let service: NgSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
