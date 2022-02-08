import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdProductAddComponent } from './od-product-add.component';

describe('OdProductAddComponent', () => {
  let component: OdProductAddComponent;
  let fixture: ComponentFixture<OdProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdProductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
