import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityEngineeringPageComponent } from './mobility-engineering-page.component';

describe('MobilityEngineeringPageComponent', () => {
  let component: MobilityEngineeringPageComponent;
  let fixture: ComponentFixture<MobilityEngineeringPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilityEngineeringPageComponent]
    });
    fixture = TestBed.createComponent(MobilityEngineeringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
