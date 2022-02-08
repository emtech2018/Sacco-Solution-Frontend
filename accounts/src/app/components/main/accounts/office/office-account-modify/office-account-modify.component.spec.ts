import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAccountModifyComponent } from './office-account-modify.component';

describe('OfficeAccountModifyComponent', () => {
  let component: OfficeAccountModifyComponent;
  let fixture: ComponentFixture<OfficeAccountModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAccountModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAccountModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
