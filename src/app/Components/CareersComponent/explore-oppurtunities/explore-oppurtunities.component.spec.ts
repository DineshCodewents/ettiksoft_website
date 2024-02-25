import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOppurtunitiesComponent } from './explore-oppurtunities.component';

describe('ExploreOppurtunitiesComponent', () => {
  let component: ExploreOppurtunitiesComponent;
  let fixture: ComponentFixture<ExploreOppurtunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreOppurtunitiesComponent]
    });
    fixture = TestBed.createComponent(ExploreOppurtunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
