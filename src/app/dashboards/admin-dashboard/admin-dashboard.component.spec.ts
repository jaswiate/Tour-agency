import { ComponentFixture, TestBed } from '@angular/core/testing';

import { admin_dashboard_component } from './admin-dashboard.component';

describe('admin_dashboard_component', () => {
  let component: admin_dashboard_component;
  let fixture: ComponentFixture<admin_dashboard_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [admin_dashboard_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(admin_dashboard_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});