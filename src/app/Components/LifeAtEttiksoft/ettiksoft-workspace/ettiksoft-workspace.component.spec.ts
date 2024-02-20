import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EttiksoftWorkspaceComponent } from './ettiksoft-workspace.component';

describe('EttiksoftWorkspaceComponent', () => {
  let component: EttiksoftWorkspaceComponent;
  let fixture: ComponentFixture<EttiksoftWorkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EttiksoftWorkspaceComponent]
    });
    fixture = TestBed.createComponent(EttiksoftWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
