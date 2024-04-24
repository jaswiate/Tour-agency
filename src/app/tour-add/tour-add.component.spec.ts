import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tour_add_component } from './tour-add.component';

describe('tour_add.component', () => {
  let component: tour_add_component;
  let fixture: ComponentFixture<tour_add_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tour_add_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tour_add_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});