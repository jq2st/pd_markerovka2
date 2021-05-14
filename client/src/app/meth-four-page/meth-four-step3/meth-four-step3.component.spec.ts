import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethFourStep3Component } from './meth-four-step3.component';

describe('MethFourStep3Component', () => {
  let component: MethFourStep3Component;
  let fixture: ComponentFixture<MethFourStep3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFourStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFourStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
