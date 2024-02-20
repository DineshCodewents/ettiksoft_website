import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovativeTeamComponent } from './innovative-team.component';

describe('InnovativeTeamComponent', () => {
  let component: InnovativeTeamComponent;
  let fixture: ComponentFixture<InnovativeTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovativeTeamComponent]
    });
    fixture = TestBed.createComponent(InnovativeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
