import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNavComponent } from './service-nav.component';

describe('ServiceNavComponent', () => {
  let component: ServiceNavComponent;
  let fixture: ComponentFixture<ServiceNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceNavComponent]
    });
    fixture = TestBed.createComponent(ServiceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
