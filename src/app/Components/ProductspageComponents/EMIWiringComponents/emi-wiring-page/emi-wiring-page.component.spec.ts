import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiWiringPageComponent } from './emi-wiring-page.component';

describe('EmiWiringPageComponent', () => {
  let component: EmiWiringPageComponent;
  let fixture: ComponentFixture<EmiWiringPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmiWiringPageComponent]
    });
    fixture = TestBed.createComponent(EmiWiringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
