import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlInquireComponent } from './gl-inquire.component';

describe('GlInquireComponent', () => {
  let component: GlInquireComponent;
  let fixture: ComponentFixture<GlInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
