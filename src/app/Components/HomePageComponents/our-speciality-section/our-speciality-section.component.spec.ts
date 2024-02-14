import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialitySectionComponent } from './our-speciality-section.component';

describe('OurSpecialitySectionComponent', () => {
  let component: OurSpecialitySectionComponent;
  let fixture: ComponentFixture<OurSpecialitySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSpecialitySectionComponent]
    });
    fixture = TestBed.createComponent(OurSpecialitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
