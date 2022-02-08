import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdAccountInquireComponent } from './od-account-inquire.component';

describe('OdAccountInquireComponent', () => {
  let component: OdAccountInquireComponent;
  let fixture: ComponentFixture<OdAccountInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdAccountInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdAccountInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
