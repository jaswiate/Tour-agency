import { ComponentFixture, TestBed } from '@angular/core/testing';

import { login_component } from './login.component';

describe('login_component', () => {
  let component: login_component;
  let fixture: ComponentFixture<login_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [login_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(login_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});