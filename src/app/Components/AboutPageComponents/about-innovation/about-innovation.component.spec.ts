import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnovationComponent } from './about-innovation.component';

describe('AboutInnovationComponent', () => {
  let component: AboutInnovationComponent;
  let fixture: ComponentFixture<AboutInnovationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInnovationComponent]
    });
    fixture = TestBed.createComponent(AboutInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
