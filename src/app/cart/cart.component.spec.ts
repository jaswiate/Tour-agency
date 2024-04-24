import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cart_component } from './cart.component';

describe('cart_component', () => {
  let component: cart_component;
  let fixture: ComponentFixture<cart_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [cart_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cart_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});