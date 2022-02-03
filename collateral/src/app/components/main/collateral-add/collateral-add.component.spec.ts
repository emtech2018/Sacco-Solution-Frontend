import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralAddComponent } from './collateral-add.component';

describe('CollateralAddComponent', () => {
  let component: CollateralAddComponent;
  let fixture: ComponentFixture<CollateralAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
