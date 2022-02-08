import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAccountDeleteComponent } from './td-account-delete.component';

describe('TdAccountDeleteComponent', () => {
  let component: TdAccountDeleteComponent;
  let fixture: ComponentFixture<TdAccountDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdAccountDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
