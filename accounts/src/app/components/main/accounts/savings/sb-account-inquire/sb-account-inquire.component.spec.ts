import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAccountInquireComponent } from './sb-account-inquire.component';

describe('SbAccountInquireComponent', () => {
  let component: SbAccountInquireComponent;
  let fixture: ComponentFixture<SbAccountInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAccountInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAccountInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
