import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesCardComponent } from './testimonies-card.component';

describe('TestimoniesCardComponent', () => {
  let component: TestimoniesCardComponent;
  let fixture: ComponentFixture<TestimoniesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
