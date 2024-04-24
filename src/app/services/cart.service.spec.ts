import { TestBed } from '@angular/core/testing';

import { cart_service } from './cart.service';

describe('cart_service', () => {
  let service: cart_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cart_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});