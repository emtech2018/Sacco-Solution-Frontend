import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdProductComponent } from './td-product.component';

describe('TdProductComponent', () => {
  let component: TdProductComponent;
  let fixture: ComponentFixture<TdProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
