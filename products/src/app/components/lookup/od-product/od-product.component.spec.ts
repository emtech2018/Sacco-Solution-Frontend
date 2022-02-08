import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdProductComponent } from './od-product.component';

describe('OdProductComponent', () => {
  let component: OdProductComponent;
  let fixture: ComponentFixture<OdProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
