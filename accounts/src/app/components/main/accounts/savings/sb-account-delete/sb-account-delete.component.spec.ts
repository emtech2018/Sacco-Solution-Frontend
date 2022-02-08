import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAccountDeleteComponent } from './sb-account-delete.component';

describe('SbAccountDeleteComponent', () => {
  let component: SbAccountDeleteComponent;
  let fixture: ComponentFixture<SbAccountDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAccountDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
