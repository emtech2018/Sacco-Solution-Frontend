import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdAccountDeleteComponent } from './od-account-delete.component';

describe('OdAccountDeleteComponent', () => {
  let component: OdAccountDeleteComponent;
  let fixture: ComponentFixture<OdAccountDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdAccountDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
