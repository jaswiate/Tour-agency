import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tour-rating',
    templateUrl: './tour-rating.component.html',
    styleUrls: ['./tour-rating.component.css']
})
export class tour_rating_component implements OnInit {
    constructor() { }
    @Output() rating_change = new EventEmitter<number>();
    @Input() tour_likes = 0
    @Input() tour_dislikes = 0
    voted = false
    ngOnInit(): void { }
    rated(s: string) {
        if(this.voted) { return }
        if(s == "+") { this.rating_change.emit(1) }
        else { this.rating_change.emit(-1) }
        this.voted = true
    }
}