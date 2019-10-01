import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: HowItWorksCardComponent;
  let fixture: ComponentFixture<HowItWorksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
