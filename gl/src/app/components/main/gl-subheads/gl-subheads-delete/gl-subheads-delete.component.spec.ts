import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsDeleteComponent } from './gl-subheads-delete.component';

describe('GlSubheadsDeleteComponent', () => {
  let component: GlSubheadsDeleteComponent;
  let fixture: ComponentFixture<GlSubheadsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
