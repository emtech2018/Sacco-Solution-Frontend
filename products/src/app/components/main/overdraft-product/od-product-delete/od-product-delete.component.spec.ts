import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdProductDeleteComponent } from './od-product-delete.component';

describe('OdProductDeleteComponent', () => {
  let component: OdProductDeleteComponent;
  let fixture: ComponentFixture<OdProductDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdProductDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
