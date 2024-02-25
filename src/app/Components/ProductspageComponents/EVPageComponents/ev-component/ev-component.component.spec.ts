import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvComponentComponent } from './ev-component.component';

describe('EvComponentComponent', () => {
  let component: EvComponentComponent;
  let fixture: ComponentFixture<EvComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvComponentComponent]
    });
    fixture = TestBed.createComponent(EvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
