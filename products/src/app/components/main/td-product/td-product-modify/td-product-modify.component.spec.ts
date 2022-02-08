import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdProductModifyComponent } from './td-product-modify.component';

describe('TdProductModifyComponent', () => {
  let component: TdProductModifyComponent;
  let fixture: ComponentFixture<TdProductModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdProductModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdProductModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
