import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdProductInquireComponent } from './od-product-inquire.component';

describe('OdProductInquireComponent', () => {
  let component: OdProductInquireComponent;
  let fixture: ComponentFixture<OdProductInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdProductInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdProductInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
