import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethFivePageComponent } from './meth-five-page.component';

describe('MethFivePageComponent', () => {
  let component: MethFivePageComponent;
  let fixture: ComponentFixture<MethFivePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethFivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethFivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
