import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestInquireComponent } from './interest-inquire.component';

describe('InterestInquireComponent', () => {
  let component: InterestInquireComponent;
  let fixture: ComponentFixture<InterestInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
