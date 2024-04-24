import { ComponentFixture, TestBed } from '@angular/core/testing';

import { notfound_404_component } from './notfound-404.component';

describe('notfound_404_component', () => {
  let component: notfound_404_component;
  let fixture: ComponentFixture<notfound_404_component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ notfound_404_component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(notfound_404_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});