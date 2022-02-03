import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralDeleteComponent } from './collateral-delete.component';

describe('CollateralDeleteComponent', () => {
  let component: CollateralDeleteComponent;
  let fixture: ComponentFixture<CollateralDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
