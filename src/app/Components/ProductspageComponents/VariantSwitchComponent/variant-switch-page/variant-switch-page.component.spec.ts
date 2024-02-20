import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantSwitchPageComponent } from './variant-switch-page.component';

describe('VariantSwitchPageComponent', () => {
  let component: VariantSwitchPageComponent;
  let fixture: ComponentFixture<VariantSwitchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantSwitchPageComponent]
    });
    fixture = TestBed.createComponent(VariantSwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
