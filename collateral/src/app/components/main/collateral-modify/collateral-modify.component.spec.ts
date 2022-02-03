import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralModifyComponent } from './collateral-modify.component';

describe('CollateralModifyComponent', () => {
  let component: CollateralModifyComponent;
  let fixture: ComponentFixture<CollateralModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
