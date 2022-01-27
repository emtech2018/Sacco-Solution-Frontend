import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsInquireComponent } from './gl-subheads-inquire.component';

describe('GlSubheadsInquireComponent', () => {
  let component: GlSubheadsInquireComponent;
  let fixture: ComponentFixture<GlSubheadsInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
