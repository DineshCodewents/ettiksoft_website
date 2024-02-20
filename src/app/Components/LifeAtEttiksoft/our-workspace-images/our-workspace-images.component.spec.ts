import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkspaceImagesComponent } from './our-workspace-images.component';

describe('OurWorkspaceImagesComponent', () => {
  let component: OurWorkspaceImagesComponent;
  let fixture: ComponentFixture<OurWorkspaceImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurWorkspaceImagesComponent]
    });
    fixture = TestBed.createComponent(OurWorkspaceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
