import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAccountInquireComponent } from './td-account-inquire.component';

describe('TdAccountInquireComponent', () => {
  let component: TdAccountInquireComponent;
  let fixture: ComponentFixture<TdAccountInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdAccountInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAccountInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
