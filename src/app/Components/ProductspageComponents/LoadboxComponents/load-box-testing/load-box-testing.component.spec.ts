import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadBoxTestingComponent } from './load-box-testing.component';

describe('LoadBoxTestingComponent', () => {
  let component: LoadBoxTestingComponent;
  let fixture: ComponentFixture<LoadBoxTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadBoxTestingComponent]
    });
    fixture = TestBed.createComponent(LoadBoxTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
