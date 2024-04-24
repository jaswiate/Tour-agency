import { Injectable } from '@angular/core';
import { Tour } from '../ITour';

@Injectable({
  providedIn: 'root',
})
export class cart_service {
  constructor() {}
  cart: Tour[] = [];
}