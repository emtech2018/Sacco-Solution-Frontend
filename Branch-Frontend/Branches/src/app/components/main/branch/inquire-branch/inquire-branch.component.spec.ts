import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireBranchComponent } from './inquire-branch.component';

describe('InquireBranchComponent', () => {
  let component: InquireBranchComponent;
  let fixture: ComponentFixture<InquireBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquireBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
