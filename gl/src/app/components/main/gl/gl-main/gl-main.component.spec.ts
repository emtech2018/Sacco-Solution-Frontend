import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlMainComponent } from './gl-main.component';

describe('GlMainComponent', () => {
  let component: GlMainComponent;
  let fixture: ComponentFixture<GlMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
