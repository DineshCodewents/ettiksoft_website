import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireFormComponent } from './enquire-form.component';

describe('EnquireFormComponent', () => {
  let component: EnquireFormComponent;
  let fixture: ComponentFixture<EnquireFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquireFormComponent]
    });
    fixture = TestBed.createComponent(EnquireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
