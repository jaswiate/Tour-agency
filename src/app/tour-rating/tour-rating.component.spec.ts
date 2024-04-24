import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tour_rating_component } from './tour-rating.component';

describe('tour_add.component', () => {
  let component: tour_rating_component;
  let fixture: ComponentFixture<tour_rating_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tour_rating_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tour_rating_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});