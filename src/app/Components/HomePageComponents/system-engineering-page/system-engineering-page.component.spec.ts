import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEngineeringPageComponent } from './system-engineering-page.component';

describe('SystemEngineeringPageComponent', () => {
  let component: SystemEngineeringPageComponent;
  let fixture: ComponentFixture<SystemEngineeringPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemEngineeringPageComponent]
    });
    fixture = TestBed.createComponent(SystemEngineeringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
