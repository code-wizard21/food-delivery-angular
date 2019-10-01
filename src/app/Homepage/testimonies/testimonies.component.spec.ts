import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesComponent } from './testimonies.component';

describe('TestimoniesComponent', () => {
  let component: TestimoniesComponent;
  let fixture: ComponentFixture<TestimoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
