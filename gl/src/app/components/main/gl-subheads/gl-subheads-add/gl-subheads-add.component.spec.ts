import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsAddComponent } from './gl-subheads-add.component';

describe('GlSubheadsAddComponent', () => {
  let component: GlSubheadsAddComponent;
  let fixture: ComponentFixture<GlSubheadsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
