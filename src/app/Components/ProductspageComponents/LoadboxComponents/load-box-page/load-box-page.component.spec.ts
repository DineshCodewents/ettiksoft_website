import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBoxPageComponent } from './load-box-page.component';

describe('LoadBoxPageComponent', () => {
  let component: LoadBoxPageComponent;
  let fixture: ComponentFixture<LoadBoxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadBoxPageComponent]
    });
    fixture = TestBed.createComponent(LoadBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
