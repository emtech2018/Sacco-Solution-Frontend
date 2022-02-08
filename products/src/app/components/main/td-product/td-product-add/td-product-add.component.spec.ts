import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdProductAddComponent } from './td-product-add.component';

describe('TdProductAddComponent', () => {
  let component: TdProductAddComponent;
  let fixture: ComponentFixture<TdProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdProductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
