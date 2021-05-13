import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethTwoPageComponent } from './meth-two-page.component';

describe('MethTwoPageComponent', () => {
  let component: MethTwoPageComponent;
  let fixture: ComponentFixture<MethTwoPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
