import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethThreeStep2Component } from './meth-three-step2.component';

describe('MethThreeStep2Component', () => {
  let component: MethThreeStep2Component;
  let fixture: ComponentFixture<MethThreeStep2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethThreeStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethThreeStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
