import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountAddComponent } from './loan-account-add.component';

describe('LoanAccountAddComponent', () => {
  let component: LoanAccountAddComponent;
  let fixture: ComponentFixture<LoanAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
