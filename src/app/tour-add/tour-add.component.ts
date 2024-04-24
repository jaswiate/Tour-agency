import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tour } from '../ITour';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { firebase_service } from '../services/firebase.service';
import { auth_service } from '../services/auth.service';

@Component({
    selector: 'app-tour-add',
    templateUrl: './tour-add.component.html',
    styleUrls: ['./tour-add.component.css'],
})
export class tour_add_component implements OnInit {
    constructor(private fb: firebase_service, private auth: auth_service) { }
    ngOnInit(): void { }
    tour_add_form = new FormGroup({
        tourname: new FormControl('', [
            Validators.required,
            Validators.minLength(2)
        ]),
        tourcountry: new FormControl('', [
            Validators.required,
            Validators.minLength(2)
        ]),
        tourstart: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$')
        ]),
        tourend: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$')
        ]),
        tourprice: new FormControl('', [
            Validators.required,
            Validators.min(1),
            Validators.pattern('[0-9]*'),
        ]),
        tourplace: new FormControl('', [
            Validators.required,
            Validators.min(1),
            Validators.pattern('[0-9]*'),
        ]),
        tourimage: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
        ]),
        tourdesc: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
        ]),
    });
    error = false;
    git = false;
    submit() {
        if(!this.auth.userRoles.manager) { return; }
        if(!this.tour_add_form.valid) { this.error = true; return }
        let x = this.tour_add_form;
        let tour_add = {
            name: x.get('tourname')!.value,
            country: x.get('tourcountry')!.value,
            start: x.get('tourstart')!.value,
            end: x.get('tourend')!.value,
            price: Number(x.get('tourprice')!.value),
            place: Number(x.get('tourplace')!.value),
            image: x.get('tourimage')!.value,
            desc: x.get('tourdesc')!.value,
            currency: '$',
            reserved: 0,
            likes: 0,
            dislikes: 0,
        } as Tour;
        this.fb.addTour(tour_add);
        this.error = false;
        this.git = true;
        this.tour_add_form.reset();
    }
}

