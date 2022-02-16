import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralMaintenaceComponent } from './collateral-maintenace.component';

describe('CollateralMaintenaceComponent', () => {
  let component: CollateralMaintenaceComponent;
  let fixture: ComponentFixture<CollateralMaintenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralMaintenaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralMaintenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
