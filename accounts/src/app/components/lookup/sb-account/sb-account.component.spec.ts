import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAccountComponent } from './sb-account.component';

describe('SbAccountComponent', () => {
  let component: SbAccountComponent;
  let fixture: ComponentFixture<SbAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
