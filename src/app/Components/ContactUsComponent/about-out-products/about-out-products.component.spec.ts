import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOutProductsComponent } from './about-out-products.component';

describe('AboutOutProductsComponent', () => {
  let component: AboutOutProductsComponent;
  let fixture: ComponentFixture<AboutOutProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOutProductsComponent]
    });
    fixture = TestBed.createComponent(AboutOutProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
