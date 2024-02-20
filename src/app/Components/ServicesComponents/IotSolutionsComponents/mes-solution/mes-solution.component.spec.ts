import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSolutionComponent } from './mes-solution.component';

describe('MesSolutionComponent', () => {
  let component: MesSolutionComponent;
  let fixture: ComponentFixture<MesSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesSolutionComponent]
    });
    fixture = TestBed.createComponent(MesSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
