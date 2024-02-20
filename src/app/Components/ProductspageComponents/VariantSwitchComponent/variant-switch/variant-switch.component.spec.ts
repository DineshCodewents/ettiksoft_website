import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantSwitchComponent } from './variant-switch.component';

describe('VariantSwitchComponent', () => {
  let component: VariantSwitchComponent;
  let fixture: ComponentFixture<VariantSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantSwitchComponent]
    });
    fixture = TestBed.createComponent(VariantSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
