import { ComponentFixture, TestBed } from '@angular/core/testing';

import { home_page_component } from './home-page.component';

describe('home_page_component', () => {
  let component: home_page_component;
  let fixture: ComponentFixture<home_page_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ home_page_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(home_page_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});