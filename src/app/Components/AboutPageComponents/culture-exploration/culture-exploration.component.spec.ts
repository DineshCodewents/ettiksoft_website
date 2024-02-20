import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureExplorationComponent } from './culture-exploration.component';

describe('CultureExplorationComponent', () => {
  let component: CultureExplorationComponent;
  let fixture: ComponentFixture<CultureExplorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CultureExplorationComponent]
    });
    fixture = TestBed.createComponent(CultureExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
