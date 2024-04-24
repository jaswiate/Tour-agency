import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navbar_component } from './navbar.component';

describe('navbar_component', () => {
  let component: navbar_component;
  let fixture: ComponentFixture<navbar_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ navbar_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(navbar_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});