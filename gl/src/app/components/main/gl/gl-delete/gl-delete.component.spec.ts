import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlDeleteComponent } from './gl-delete.component';

describe('GlDeleteComponent', () => {
  let component: GlDeleteComponent;
  let fixture: ComponentFixture<GlDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
