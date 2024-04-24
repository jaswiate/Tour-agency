import { TestBed } from '@angular/core/testing';

import { auth_guard } from './auth.guard';

describe('auth_guard', () => {
  let guard: auth_guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(auth_guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});