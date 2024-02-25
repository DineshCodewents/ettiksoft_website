import { Component } from '@angular/core';
import { EnquireFormComponent } from '../../enquire-form/enquire-form.component';
import { EnquirePopupService } from '../../enquire-popup.service';

@Component({
  selector: 'app-variant-switch',
  templateUrl: './variant-switch.component.html',
  styleUrls: ['./variant-switch.component.css']
})
export class VariantSwitchComponent {
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
