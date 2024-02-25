import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotSolutionPageComponent } from './iot-solution-page.component';

describe('IotSolutionPageComponent', () => {
  let component: IotSolutionPageComponent;
  let fixture: ComponentFixture<IotSolutionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotSolutionPageComponent]
    });
    fixture = TestBed.createComponent(IotSolutionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
