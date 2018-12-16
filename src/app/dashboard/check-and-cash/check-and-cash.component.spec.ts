import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAndCashComponent } from './check-and-cash.component';

describe('CheckAndCashComponent', () => {
  let component: CheckAndCashComponent;
  let fixture: ComponentFixture<CheckAndCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAndCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAndCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
