import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageMediaNavComponent } from './language-media-nav.component';

describe('LanguageMediaNavComponent', () => {
  let component: LanguageMediaNavComponent;
  let fixture: ComponentFixture<LanguageMediaNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageMediaNavComponent]
    });
    fixture = TestBed.createComponent(LanguageMediaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
