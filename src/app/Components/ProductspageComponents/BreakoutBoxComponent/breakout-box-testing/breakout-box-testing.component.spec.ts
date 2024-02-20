import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakoutBoxTestingComponent } from './breakout-box-testing.component';

describe('BreakoutBoxTestingComponent', () => {
  let component: BreakoutBoxTestingComponent;
  let fixture: ComponentFixture<BreakoutBoxTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakoutBoxTestingComponent]
    });
    fixture = TestBed.createComponent(BreakoutBoxTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
