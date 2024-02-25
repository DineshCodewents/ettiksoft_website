import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingCountriesComponent } from './working-countries.component';

describe('WorkingCountriesComponent', () => {
  let component: WorkingCountriesComponent;
  let fixture: ComponentFixture<WorkingCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingCountriesComponent]
    });
    fixture = TestBed.createComponent(WorkingCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
