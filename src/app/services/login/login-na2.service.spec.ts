import { TestBed } from '@angular/core/testing';

import { LoginNa2Service } from './login-na2.service';

describe('LoginNa2Service', () => {
  let service: LoginNa2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginNa2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
