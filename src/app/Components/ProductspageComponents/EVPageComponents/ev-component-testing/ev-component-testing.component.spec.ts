import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvComponentTestingComponent } from './ev-component-testing.component';

describe('EvComponentTestingComponent', () => {
  let component: EvComponentTestingComponent;
  let fixture: ComponentFixture<EvComponentTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvComponentTestingComponent]
    });
    fixture = TestBed.createComponent(EvComponentTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
