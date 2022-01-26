import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestModifyComponent } from './interest-modify.component';

describe('InterestModifyComponent', () => {
  let component: InterestModifyComponent;
  let fixture: ComponentFixture<InterestModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
