import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tour } from '../ITour';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { firebase_service } from '../services/firebase.service';
import { auth_service } from '../services/auth.service';
import { first, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-tour-mod',
    templateUrl: './tour-mod.component.html',
    styleUrls: ['./tour-mod.component.css'],
})
export class tour_mod_component implements OnInit {
    constructor(private fb: firebase_service, private auth: auth_service, private router: Router, private route: ActivatedRoute) { }
    id: any = null;
    tour: any = null;
    sub: Subscription | undefined;
    ngOnInit(): void {
        this.sub = this.route.params.subscribe((p) => { this.id = p['id']; });
            this.fb.getTours().pipe(first()).subscribe((tours: any[]) => {
            for (let t of tours) {
                if (t.id == this.id) {
                    this.tour_mod_form.patchValue(t);
                    break;
                }
            }
        });
    }
    ngOnDestroy(): void { if(this.sub) this.sub.unsubscribe(); }
    tour_mod_form = new FormGroup({
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
        if(!this.tour_mod_form.valid) { this.error = true; return }
        this.fb.getTours().pipe(first()).subscribe((tours: any[]) => {
            let tour: any;
            for(let t of tours) { if(t.id == this.id) { tour = t; break; } }
            let x = this.tour_mod_form;
            let tour_update = {
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
            this.fb.updateTour(tour_update, this.id);
            this.error = false;
            this.git = true;
            this.tour_mod_form.reset();
        });
    this.router.navigate(['/manager/']);
    }
}