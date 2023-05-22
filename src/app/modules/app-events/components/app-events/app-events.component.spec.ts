import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEventsComponent } from './app-events.component';

describe('AppEventsComponent', () => {
  let component: AppEventsComponent;
  let fixture: ComponentFixture<AppEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEventsComponent]
    });
    fixture = TestBed.createComponent(AppEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
