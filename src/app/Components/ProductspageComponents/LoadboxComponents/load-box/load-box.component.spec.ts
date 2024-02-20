import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBoxComponent } from './load-box.component';

describe('LoadBoxComponent', () => {
  let component: LoadBoxComponent;
  let fixture: ComponentFixture<LoadBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadBoxComponent]
    });
    fixture = TestBed.createComponent(LoadBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
