import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tours_component } from './tours.component';

describe('tours_component', () => {
  let component: tours_component;
  let fixture: ComponentFixture<tours_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tours_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tours_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});