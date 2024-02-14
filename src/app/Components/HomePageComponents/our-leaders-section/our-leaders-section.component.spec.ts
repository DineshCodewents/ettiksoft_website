import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLeadersSectionComponent } from './our-leaders-section.component';

describe('OurLeadersSectionComponent', () => {
  let component: OurLeadersSectionComponent;
  let fixture: ComponentFixture<OurLeadersSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLeadersSectionComponent]
    });
    fixture = TestBed.createComponent(OurLeadersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
