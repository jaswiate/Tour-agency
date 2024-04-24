import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tour_mod_component } from './tour-mod.component';

describe('tour_mod_component', () => {
  let component: tour_mod_component;
  let fixture: ComponentFixture<tour_mod_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tour_mod_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tour_mod_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});