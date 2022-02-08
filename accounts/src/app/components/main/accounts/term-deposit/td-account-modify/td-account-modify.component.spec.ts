import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAccountModifyComponent } from './td-account-modify.component';

describe('TdAccountModifyComponent', () => {
  let component: TdAccountModifyComponent;
  let fixture: ComponentFixture<TdAccountModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdAccountModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAccountModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
