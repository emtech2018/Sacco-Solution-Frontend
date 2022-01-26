import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDeleteComponent } from './interest-delete.component';

describe('InterestDeleteComponent', () => {
  let component: InterestDeleteComponent;
  let fixture: ComponentFixture<InterestDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
