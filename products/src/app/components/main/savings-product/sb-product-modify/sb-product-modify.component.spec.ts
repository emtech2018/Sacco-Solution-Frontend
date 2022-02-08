import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbProductModifyComponent } from './sb-product-modify.component';

describe('SbProductModifyComponent', () => {
  let component: SbProductModifyComponent;
  let fixture: ComponentFixture<SbProductModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbProductModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbProductModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
