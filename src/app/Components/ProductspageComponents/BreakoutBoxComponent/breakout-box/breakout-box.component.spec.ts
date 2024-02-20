import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakoutBoxComponent } from './breakout-box.component';

describe('BreakoutBoxComponent', () => {
  let component: BreakoutBoxComponent;
  let fixture: ComponentFixture<BreakoutBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakoutBoxComponent]
    });
    fixture = TestBed.createComponent(BreakoutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
