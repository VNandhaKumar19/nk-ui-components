import { TestBed } from '@angular/core/testing';

import { NgxNkButtonService } from './nk-button.service';

describe('NgxNkButtonComponentService', () => {
  let service: NgxNkButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNkButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
