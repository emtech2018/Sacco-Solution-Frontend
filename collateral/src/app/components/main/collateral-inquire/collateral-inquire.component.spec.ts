import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralInquireComponent } from './collateral-inquire.component';

describe('CollateralInquireComponent', () => {
  let component: CollateralInquireComponent;
  let fixture: ComponentFixture<CollateralInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
