import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipAndTeamComponent } from './leadership-and-team.component';

describe('LeadershipAndTeamComponent', () => {
  let component: LeadershipAndTeamComponent;
  let fixture: ComponentFixture<LeadershipAndTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadershipAndTeamComponent]
    });
    fixture = TestBed.createComponent(LeadershipAndTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
