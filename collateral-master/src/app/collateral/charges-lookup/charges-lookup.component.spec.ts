import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesLookupComponent } from './charges-lookup.component';

describe('ChargesLookupComponent', () => {
  let component: ChargesLookupComponent;
  let fixture: ComponentFixture<ChargesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
