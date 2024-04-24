import { TestBed } from '@angular/core/testing';

import { firebase_service } from './firebase.service';

describe('firebase_service', () => {
  let service: firebase_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(firebase_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});