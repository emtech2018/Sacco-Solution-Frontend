import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSubheadsMainComponent } from './gl-subheads-main.component';

describe('GlSubheadsMainComponent', () => {
  let component: GlSubheadsMainComponent;
  let fixture: ComponentFixture<GlSubheadsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSubheadsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSubheadsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
