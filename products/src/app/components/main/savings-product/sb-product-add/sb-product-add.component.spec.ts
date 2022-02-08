import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbProductAddComponent } from './sb-product-add.component';

describe('SbProductAddComponent', () => {
  let component: SbProductAddComponent;
  let fixture: ComponentFixture<SbProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbProductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
