import { TestBed } from '@angular/core/testing';

import { login_guard } from './login.guard';

describe('login_guard', () => {
  let guard: login_guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(login_guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});