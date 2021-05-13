import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethFiveStep2Component } from './meth-five-step2.component';

describe('MethFiveStep2Component', () => {
  let component: MethFiveStep2Component;
  let fixture: ComponentFixture<MethFiveStep2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFiveStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFiveStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
