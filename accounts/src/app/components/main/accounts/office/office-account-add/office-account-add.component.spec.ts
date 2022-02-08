import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAccountAddComponent } from './office-account-add.component';

describe('OfficeAccountAddComponent', () => {
  let component: OfficeAccountAddComponent;
  let fixture: ComponentFixture<OfficeAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
