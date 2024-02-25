import { Component } from '@angular/core';
import { EnquirePopupService } from '../../enquire-popup.service';
import { EnquireFormComponent } from '../../enquire-form/enquire-form.component';

@Component({
  selector: 'app-load-box',
  templateUrl: './load-box.component.html',
  styleUrls: ['./load-box.component.css']
})
export class LoadBoxComponent {
  constructor(private modalService: EnquirePopupService) {}

  openEnquirePopup(): void {
    this.modalService.openPopup(EnquireFormComponent);
  }
  public iconClass: string = 'fa fa-angle-right';

  changeIcon() {
    this.iconClass = 'fa fa-arrow-right';
  }

  resetIcon() {
    this.iconClass = 'fa fa-angle-right';
  }

}
