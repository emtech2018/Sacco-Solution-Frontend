import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAccountDeleteComponent } from './office-account-delete.component';

describe('OfficeAccountDeleteComponent', () => {
  let component: OfficeAccountDeleteComponent;
  let fixture: ComponentFixture<OfficeAccountDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAccountDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
