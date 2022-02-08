import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdAccountAddComponent } from './od-account-add.component';

describe('OdAccountAddComponent', () => {
  let component: OdAccountAddComponent;
  let fixture: ComponentFixture<OdAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdAccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
