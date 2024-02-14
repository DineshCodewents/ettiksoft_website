import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EttiksoftMapSectionComponent } from './ettiksoft-map-section.component';

describe('EttiksoftMapSectionComponent', () => {
  let component: EttiksoftMapSectionComponent;
  let fixture: ComponentFixture<EttiksoftMapSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EttiksoftMapSectionComponent]
    });
    fixture = TestBed.createComponent(EttiksoftMapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
