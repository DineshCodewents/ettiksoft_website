import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiWiringComponent } from './emi-wiring.component';

describe('EmiWiringComponent', () => {
  let component: EmiWiringComponent;
  let fixture: ComponentFixture<EmiWiringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiWiringComponent]
    });
    fixture = TestBed.createComponent(EmiWiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
