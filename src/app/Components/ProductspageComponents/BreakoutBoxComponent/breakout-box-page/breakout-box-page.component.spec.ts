import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakoutBoxPageComponent } from './breakout-box-page.component';

describe('BreakoutBoxPageComponent', () => {
  let component: BreakoutBoxPageComponent;
  let fixture: ComponentFixture<BreakoutBoxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakoutBoxPageComponent]
    });
    fixture = TestBed.createComponent(BreakoutBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
