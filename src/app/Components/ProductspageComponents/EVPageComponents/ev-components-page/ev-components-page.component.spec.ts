import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvComponentsPageComponent } from './ev-components-page.component';

describe('EvComponentsPageComponent', () => {
  let component: EvComponentsPageComponent;
  let fixture: ComponentFixture<EvComponentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvComponentsPageComponent]
    });
    fixture = TestBed.createComponent(EvComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
