import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbProductComponent } from './sb-product.component';

describe('SbProductComponent', () => {
  let component: SbProductComponent;
  let fixture: ComponentFixture<SbProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
