import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingInnovationComponent } from './driving-innovation.component';

describe('DrivingInnovationComponent', () => {
  let component: DrivingInnovationComponent;
  let fixture: ComponentFixture<DrivingInnovationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrivingInnovationComponent]
    });
    fixture = TestBed.createComponent(DrivingInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
