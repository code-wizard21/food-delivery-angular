import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppComponent } from './download-app.component';

describe('DownloadAppComponent', () => {
  let component: DownloadAppComponent;
  let fixture: ComponentFixture<DownloadAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
