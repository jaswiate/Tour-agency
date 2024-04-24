import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tour_detail_component } from './tour-detail.component';

describe('tour_detail_component', () => {
  let component: tour_detail_component;
  let fixture: ComponentFixture<tour_detail_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tour_detail_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tour_detail_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});