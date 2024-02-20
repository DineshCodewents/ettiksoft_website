import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelInVersatileComponent } from './excel-in-versatile.component';

describe('ExcelInVersatileComponent', () => {
  let component: ExcelInVersatileComponent;
  let fixture: ComponentFixture<ExcelInVersatileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelInVersatileComponent]
    });
    fixture = TestBed.createComponent(ExcelInVersatileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
