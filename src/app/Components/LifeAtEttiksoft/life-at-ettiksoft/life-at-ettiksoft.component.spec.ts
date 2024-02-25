import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtEttiksoftComponent } from './life-at-ettiksoft.component';

describe('LifeAtEttiksoftComponent', () => {
  let component: LifeAtEttiksoftComponent;
  let fixture: ComponentFixture<LifeAtEttiksoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeAtEttiksoftComponent]
    });
    fixture = TestBed.createComponent(LifeAtEttiksoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
