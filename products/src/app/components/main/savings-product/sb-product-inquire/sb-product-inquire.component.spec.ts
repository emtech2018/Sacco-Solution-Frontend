import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbProductInquireComponent } from './sb-product-inquire.component';

describe('SbProductInquireComponent', () => {
  let component: SbProductInquireComponent;
  let fixture: ComponentFixture<SbProductInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbProductInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbProductInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
