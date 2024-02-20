import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EttiksoftChroniclesComponent } from './ettiksoft-chronicles.component';

describe('EttiksoftChroniclesComponent', () => {
  let component: EttiksoftChroniclesComponent;
  let fixture: ComponentFixture<EttiksoftChroniclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EttiksoftChroniclesComponent]
    });
    fixture = TestBed.createComponent(EttiksoftChroniclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
