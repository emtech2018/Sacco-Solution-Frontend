import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAccountInquireComponent } from './office-account-inquire.component';

describe('OfficeAccountInquireComponent', () => {
  let component: OfficeAccountInquireComponent;
  let fixture: ComponentFixture<OfficeAccountInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAccountInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAccountInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
