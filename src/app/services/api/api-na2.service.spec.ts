import { TestBed } from '@angular/core/testing';

import { ApiNa2Service } from './api-na2.service';

describe('ApiNa2Service', () => {
  let service: ApiNa2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNa2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
