import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiWiringTestingComponent } from './emi-wiring-testing.component';

describe('EmiWiringTestingComponent', () => {
  let component: EmiWiringTestingComponent;
  let fixture: ComponentFixture<EmiWiringTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiWiringTestingComponent]
    });
    fixture = TestBed.createComponent(EmiWiringTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
