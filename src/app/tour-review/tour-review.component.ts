import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { auth_service } from '../services/auth.service';

@Component({
  selector: 'app-tour-review',
  templateUrl: './tour-review.component.html',
  styleUrls: ['./tour-review.component.css'],
})
export class tour_review_component implements OnInit {
  constructor(public auth: auth_service) {}

  @Output() newReviewEvent = new EventEmitter<review>();

  reviews: review[] = [];
  errorArray: any[] = [];

  addReview = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    date: new FormControl('', [Validators.required]),
    text: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(300),
    ]),
  });

  submitForm() {
    let newReview = {
      nick: this.addReview.get('nickname')!.value,
      date: this.addReview.get('date')!.value,
      text: this.addReview.get('text')!.value,
    } as review;
    this.newReviewEvent.emit(newReview);
    this.addReview.reset();
  }

  ngOnInit(): void {}
}

interface review {
  nick: string;
  date: string;
  text: string;
}