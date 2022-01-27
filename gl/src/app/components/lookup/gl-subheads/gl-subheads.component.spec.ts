import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsComponent } from './gl-subheads.component';

describe('GlSubheadsComponent', () => {
  let component: GlSubheadsComponent;
  let fixture: ComponentFixture<GlSubheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
