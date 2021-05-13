import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MethThreePageComponent } from './meth-three-page.component';

describe('MethThreePageComponent', () => {
  let component: MethThreePageComponent;
  let fixture: ComponentFixture<MethThreePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MethThreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
