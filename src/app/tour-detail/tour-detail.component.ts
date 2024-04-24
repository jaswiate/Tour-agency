import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { firebase_service } from '../services/firebase.service';
import { Tour } from '../ITour';

@Component ({
    selector: 'app-tour-detail',
    templateUrl: './tour-detail.component.html',
    styleUrls: ['./tour-detail.component.css']
})
  
export class tour_detail_component implements OnInit {
    constructor(private r: ActivatedRoute, public fb: firebase_service) { }
    sub: Subscription | undefined
    id: number = -1;
    tour: Tour[] = [];
    sel: number = 0;
    revs: review[] = [];

    ngOnInit(): void {
        this.sub = this.r.params.subscribe((p) => {
            this.id = p['id'];
            this.fb.getTours().pipe(first()).subscribe((tours: any[]) => {
                let tour: any;
                for(let t of tours) {
                    if(t.id == this.id) { tour = t; break; }
                }
                this.tour.push({
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
            });
        });
    }
    ngOnDestroy(): void { if(this.sub) this.sub.unsubscribe(); }
    nextPic() {
        return;
    }
    previousPic() {
        return;
    }
    ratingEventHandler(tour: Tour, e: any) {
        if(e == 1) { tour.likes += 1; }
        else { tour.dislikes += 1; }
    }
    addReview(newReview: review) { this.revs.push(newReview) }
}

interface review {
    nick: string;
    date: string;
    text: string;
}