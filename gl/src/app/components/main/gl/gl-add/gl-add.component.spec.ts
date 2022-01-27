import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAddComponent } from './gl-add.component';

describe('GlAddComponent', () => {
  let component: GlAddComponent;
  let fixture: ComponentFixture<GlAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
