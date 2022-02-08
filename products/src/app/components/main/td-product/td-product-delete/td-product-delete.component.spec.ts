import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdProductDeleteComponent } from './td-product-delete.component';

describe('TdProductDeleteComponent', () => {
  let component: TdProductDeleteComponent;
  let fixture: ComponentFixture<TdProductDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdProductDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
