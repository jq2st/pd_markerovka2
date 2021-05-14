import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethThreeStep3Component } from './meth-three-step3.component';

describe('MethThreeStep3Component', () => {
  let component: MethThreeStep3Component;
  let fixture: ComponentFixture<MethThreeStep3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethThreeStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethThreeStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
