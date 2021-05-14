import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethFiveStep3Component } from './meth-five-step3.component';

describe('MethFiveStep3Component', () => {
  let component: MethFiveStep3Component;
  let fixture: ComponentFixture<MethFiveStep3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFiveStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFiveStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
