import { Component, ElementRef, EventEmitter, OnInit, QueryList, ViewChildren, Input, Output } from '@angular/core';
import { Tour } from '../ITour';
import { auth_service } from '../services/auth.service';
import { firebase_service } from '../services/firebase.service';
import { Subscription } from 'rxjs';
import { cart_service } from '../services/cart.service';

@Component ({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})

export class tours_component implements OnInit {
    constructor(public fb: firebase_service, public auth: auth_service, public cart_ser: cart_service) { }
    tours: any[] = []
    tours_sub: Subscription | undefined

    ngOnInit(): void {
        this.tours_sub = this.fb.getTours().subscribe((c) => { this.tours = [];
            for(let tour of c) {
                this.tours.push({
                    id: tour.id,
                    name: tour.Name,
                    country: tour.Country,
                    start: tour.Start,
                    end: tour.End,
                    price: tour.Price,
                    place: tour.Place,
                    image: tour.Image,
                    desc: tour.Desc,
                    currency: tour.Currency,
                    likes: tour.Likes,
                    dislikes: tour.Dislikes
                } as Tour);
            }
        });
    }
    alert() {
        if(!this.auth.userRoles.client) { window.alert('Tylko dla zalogowanych'); return; }
    }
    get_amount(tours: Tour[]): number { return this.cart_ser.cart.length; }
    get_cart_sum(): number {
        let sum = 0;
        for(let item of this.cart_ser.cart) { sum += item.price; }
        return sum;
    }
    count_cart(tour: Tour): number {
        let c = 0;
        for(let item of this.cart_ser.cart) { 
            if(item.id == tour.id) {
                c += 1; 
            }
        }
        return c;
    }
    add_click(tour: Tour) {
        if(!this.auth.userRoles?.client) {
            window.alert('Tylko dla zalogowanych'); 
            return;
        } 
        if(this.count_cart(tour) < tour.place) { this.cart_ser.cart.push(tour) }
    }
    remove_click(tour: Tour) {
        if(!this.auth.userRoles?.client) {
            window.alert('Tylko dla zalogowanych'); 
            return;
        } 
        if(this.count_cart(tour) >= 1) {
            let idx = 0;
            for(let item of this.cart_ser.cart) {
                if(item.id == tour.id) { this.cart_ser.cart.splice(idx, 1); return; }
                idx += 1;
            }
        }
    }
    get_max_price(tours: Tour[]): Tour {
        let max = 0
        let max_tour = <Tour>{}
        for(let tour of tours) {
            if(tour.price > max) {
                max = tour.price
                max_tour = tour
            }
        }
        return max_tour 
    }
    get_min_price(tours: Tour[]): Tour {
        let min = Infinity
        let min_tour = <Tour>{}
        for(let tour of tours) {
            if(tour.price < min) {
                min = tour.price
                min_tour = tour
            }
        }
        return min_tour 
    }
    delete_tour(tour: Tour) {
        for(var i = 0; i < this.tours.length; i++) {
            if(this.tours[i] == tour) {
                this.tours.splice(i, 1)
                break
            }
        }
    }
    formSubmitEventHandler(tour: Tour) {
        this.tours.push(tour)
    }
    ratingEventHandler(tour: Tour, e: any) {
        if(e == 1) { tour.likes += 1; }
        else { tour.dislikes += 1; }
    }
}