import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdAccountModifyComponent } from './od-account-modify.component';

describe('OdAccountModifyComponent', () => {
  let component: OdAccountModifyComponent;
  let fixture: ComponentFixture<OdAccountModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdAccountModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdAccountModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
