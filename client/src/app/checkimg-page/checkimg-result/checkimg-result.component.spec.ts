import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckimgResultComponent } from './checkimg-result.component';

describe('CheckimgResultComponent', () => {
  let component: CheckimgResultComponent;
  let fixture: ComponentFixture<CheckimgResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckimgResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckimgResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
