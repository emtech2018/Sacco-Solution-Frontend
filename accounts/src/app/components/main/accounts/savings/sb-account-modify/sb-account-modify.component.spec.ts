import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAccountModifyComponent } from './sb-account-modify.component';

describe('SbAccountModifyComponent', () => {
  let component: SbAccountModifyComponent;
  let fixture: ComponentFixture<SbAccountModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAccountModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAccountModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
