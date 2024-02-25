import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityServiceComponent } from './mobility-service.component';

describe('MobilityServiceComponent', () => {
  let component: MobilityServiceComponent;
  let fixture: ComponentFixture<MobilityServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilityServiceComponent]
    });
    fixture = TestBed.createComponent(MobilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
