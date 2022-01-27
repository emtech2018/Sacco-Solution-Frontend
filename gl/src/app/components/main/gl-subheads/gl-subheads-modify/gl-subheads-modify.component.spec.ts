import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsModifyComponent } from './gl-subheads-modify.component';

describe('GlSubheadsModifyComponent', () => {
  let component: GlSubheadsModifyComponent;
  let fixture: ComponentFixture<GlSubheadsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
