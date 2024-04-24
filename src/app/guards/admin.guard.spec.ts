import { TestBed } from '@angular/core/testing';

import { admin_guard } from './admin.guard';

describe('admin_guard', () => {
  let guard: admin_guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(admin_guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});