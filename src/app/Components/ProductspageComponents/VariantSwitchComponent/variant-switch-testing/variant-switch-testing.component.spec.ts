import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantSwitchTestingComponent } from './variant-switch-testing.component';

describe('VariantSwitchTestingComponent', () => {
  let component: VariantSwitchTestingComponent;
  let fixture: ComponentFixture<VariantSwitchTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantSwitchTestingComponent]
    });
    fixture = TestBed.createComponent(VariantSwitchTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
