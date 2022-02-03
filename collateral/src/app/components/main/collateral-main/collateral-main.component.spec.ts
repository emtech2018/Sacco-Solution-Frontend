import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralMainComponent } from './collateral-main.component';

describe('CollateralMainComponent', () => {
  let component: CollateralMainComponent;
  let fixture: ComponentFixture<CollateralMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
