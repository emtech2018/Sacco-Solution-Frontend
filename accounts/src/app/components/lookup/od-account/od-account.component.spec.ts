import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdAccountComponent } from './od-account.component';

describe('OdAccountComponent', () => {
  let component: OdAccountComponent;
  let fixture: ComponentFixture<OdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
