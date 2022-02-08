import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdAccountComponent } from './td-account.component';

describe('TdAccountComponent', () => {
  let component: TdAccountComponent;
  let fixture: ComponentFixture<TdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
