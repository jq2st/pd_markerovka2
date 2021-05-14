import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethOnePageComponent } from './meth-one-page.component';

describe('MethOnePageComponent', () => {
  let component: MethOnePageComponent;
  let fixture: ComponentFixture<MethOnePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
