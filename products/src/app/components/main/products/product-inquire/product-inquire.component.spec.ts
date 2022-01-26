import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInquireComponent } from './product-inquire.component';

describe('ProductInquireComponent', () => {
  let component: ProductInquireComponent;
  let fixture: ComponentFixture<ProductInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
