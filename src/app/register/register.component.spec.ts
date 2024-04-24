import { ComponentFixture, TestBed } from '@angular/core/testing';

import { register_component } from './register.component';

describe('register_component', () => {
  let component: register_component;
  let fixture: ComponentFixture<register_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [register_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(register_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});