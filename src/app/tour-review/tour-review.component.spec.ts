import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tour_review_component } from './tour-review.component';

describe('tour_review_component', () => {
  let component: tour_review_component;
  let fixture: ComponentFixture<tour_review_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tour_review_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tour_review_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});