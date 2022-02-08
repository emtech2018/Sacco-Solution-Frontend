import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAccountAddComponent } from './sb-account-add.component';

describe('SbAccountAddComponent', () => {
  let component: SbAccountAddComponent;
  let fixture: ComponentFixture<SbAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
