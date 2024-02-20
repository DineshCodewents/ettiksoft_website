import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEnvironmentComponent } from './our-environment.component';

describe('OurEnvironmentComponent', () => {
  let component: OurEnvironmentComponent;
  let fixture: ComponentFixture<OurEnvironmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurEnvironmentComponent]
    });
    fixture = TestBed.createComponent(OurEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
