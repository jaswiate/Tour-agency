import { TestBed } from '@angular/core/testing';

import { manager_guard } from './manager.guard';

describe('manager_guard', () => {
  let guard: manager_guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(manager_guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});