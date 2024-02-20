import { Component } from '@angular/core';

@Component({
  selector: 'app-innovative-team',
  templateUrl: './innovative-team.component.html',
  styleUrls: ['./innovative-team.component.css']
})
export class InnovativeTeamComponent {
  isLoading = true;
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }
}
