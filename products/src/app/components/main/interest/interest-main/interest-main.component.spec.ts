import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestMainComponent } from './interest-main.component';

describe('InterestMainComponent', () => {
  let component: InterestMainComponent;
  let fixture: ComponentFixture<InterestMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
