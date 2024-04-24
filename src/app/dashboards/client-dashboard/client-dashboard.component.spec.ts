import { ComponentFixture, TestBed } from '@angular/core/testing';

import { client_dashboard_component } from './client-dashboard.component';

describe('client_dashboard_component', () => {
  let component: client_dashboard_component;
  let fixture: ComponentFixture<client_dashboard_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [client_dashboard_component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(client_dashboard_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});