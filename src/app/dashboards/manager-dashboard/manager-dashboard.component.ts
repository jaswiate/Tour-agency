import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { auth_service } from 'src/app/services/auth.service';
import { firebase_service } from 'src/app/services/firebase.service';
import { Tour } from 'src/app/ITour';

@Component({
    selector: 'app-manager-dashboard',
    templateUrl: './manager-dashboard.component.html',
    styleUrls: ['./manager-dashboard.component.css'],
})
export class manager_dashboard_component implements OnInit {
    constructor(public auth: auth_service, public fb: firebase_service) { }
    tours: Tour[] = []
    ngOnInit(): void { 
        this.fb.getTours().subscribe((c) => { this.tours = [];
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
    delete(i: number) { this.fb.removeDish(i); }
}