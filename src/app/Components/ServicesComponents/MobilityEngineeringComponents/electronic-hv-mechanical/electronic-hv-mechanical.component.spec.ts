import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicHvMechanicalComponent } from './electronic-hv-mechanical.component';

describe('ElectronicHvMechanicalComponent', () => {
  let component: ElectronicHvMechanicalComponent;
  let fixture: ComponentFixture<ElectronicHvMechanicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicHvMechanicalComponent]
    });
    fixture = TestBed.createComponent(ElectronicHvMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
