import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdProductModifyComponent } from './od-product-modify.component';

describe('OdProductModifyComponent', () => {
  let component: OdProductModifyComponent;
  let fixture: ComponentFixture<OdProductModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdProductModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdProductModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
