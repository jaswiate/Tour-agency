import { TestBed } from '@angular/core/testing';

import { auth_service } from './auth.service';

describe('auth_service', () => {
  let service: auth_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(auth_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});