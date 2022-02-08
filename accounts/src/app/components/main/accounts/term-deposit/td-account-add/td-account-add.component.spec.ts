import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAccountAddComponent } from './td-account-add.component';

describe('TdAccountAddComponent', () => {
  let component: TdAccountAddComponent;
  let fixture: ComponentFixture<TdAccountAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdAccountAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
