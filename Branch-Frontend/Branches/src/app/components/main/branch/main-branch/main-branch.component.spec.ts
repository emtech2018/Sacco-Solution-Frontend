import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBranchComponent } from './main-branch.component';

describe('MainBranchComponent', () => {
  let component: MainBranchComponent;
  let fixture: ComponentFixture<MainBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
