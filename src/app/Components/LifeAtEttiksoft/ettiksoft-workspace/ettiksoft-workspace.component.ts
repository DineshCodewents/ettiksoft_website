import { Component } from '@angular/core';

@Component({
  selector: 'app-ettiksoft-workspace',
  templateUrl: './ettiksoft-workspace.component.html',
  styleUrls: ['./ettiksoft-workspace.component.css']
})
export class EttiksoftWorkspaceComponent {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
