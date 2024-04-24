import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { auth_service } from '../services/auth.service';
import { cart_service } from '../services/cart.service';
import { firebase_service } from '../services/firebase.service';
import { Tour } from '../ITour';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class cart_component implements OnInit {
    constructor(
        public cart_ser: cart_service,
        private router: Router,
        public auth: auth_service,
        public fb: firebase_service
    ) {}
    ngOnInit() { window.scroll(0,0); }
    order() {
        if(this.cart_ser.cart.length > 0) {
            window.alert('Złożono zamówienie');
            this.cart_ser.cart = [];
            this.router.navigate(['tours']);
        }   
        else { return; }
    }
    remove_click(tour: Tour) { 
        let idx = 0;
        for(let item of this.cart_ser.cart) {
            if(item.id == tour.id) { this.cart_ser.cart.splice(idx, 1); return; }
            idx += 1;
        }
    }
    get_cart_sum(): number {
        let sum = 0;
        for(let item of this.cart_ser.cart) { sum += item.price; }
        return sum;
    }
    get_cart_ids(): string[] {
        let t: string[] = [];
        for(let item of this.cart_ser.cart) { t.push(String(item.id)) }
        return t;
    }
}