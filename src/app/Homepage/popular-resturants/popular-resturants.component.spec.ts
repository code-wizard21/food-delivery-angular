import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularResturantsComponent } from './popular-resturants.component';

describe('PopularResturantsComponent', () => {
  let component: PopularResturantsComponent;
  let fixture: ComponentFixture<PopularResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
