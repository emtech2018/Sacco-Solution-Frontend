import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbProductDeleteComponent } from './sb-product-delete.component';

describe('SbProductDeleteComponent', () => {
  let component: SbProductDeleteComponent;
  let fixture: ComponentFixture<SbProductDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbProductDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbProductDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
