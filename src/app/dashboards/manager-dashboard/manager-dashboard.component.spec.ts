import { ComponentFixture, TestBed } from '@angular/core/testing';

import { manager_dashboard_component } from './manager-dashboard.component';

describe('manager_dashboard_component', () => {
  let component: manager_dashboard_component;
  let fixture: ComponentFixture<manager_dashboard_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [manager_dashboard_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(manager_dashboard_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});