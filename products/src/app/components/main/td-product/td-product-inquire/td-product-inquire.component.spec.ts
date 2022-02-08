import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdProductInquireComponent } from './td-product-inquire.component';

describe('TdProductInquireComponent', () => {
  let component: TdProductInquireComponent;
  let fixture: ComponentFixture<TdProductInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdProductInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdProductInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
