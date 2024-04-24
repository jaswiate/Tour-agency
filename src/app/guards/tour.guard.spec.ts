import { TestBed } from '@angular/core/testing';

import { tour_guard } from './tour.guard';

describe('tour_guard', () => {
  let guard: tour_guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(tour_guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});