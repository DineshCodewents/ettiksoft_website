import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInnovativeSectionComponent } from './dynamic-innovative-section.component';

describe('DynamicInnovativeSectionComponent', () => {
  let component: DynamicInnovativeSectionComponent;
  let fixture: ComponentFixture<DynamicInnovativeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicInnovativeSectionComponent]
    });
    fixture = TestBed.createComponent(DynamicInnovativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
