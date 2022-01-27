import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlModifyComponent } from './gl-modify.component';

describe('GlModifyComponent', () => {
  let component: GlModifyComponent;
  let fixture: ComponentFixture<GlModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
