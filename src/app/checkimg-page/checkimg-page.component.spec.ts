import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckimgPageComponent } from './checkimg-page.component';

describe('CheckimgPageComponent', () => {
  let component: CheckimgPageComponent;
  let fixture: ComponentFixture<CheckimgPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckimgPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckimgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
