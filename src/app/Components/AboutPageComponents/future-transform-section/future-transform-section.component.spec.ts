import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTransformSectionComponent } from './future-transform-section.component';

describe('FutureTransformSectionComponent', () => {
  let component: FutureTransformSectionComponent;
  let fixture: ComponentFixture<FutureTransformSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureTransformSectionComponent]
    });
    fixture = TestBed.createComponent(FutureTransformSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
