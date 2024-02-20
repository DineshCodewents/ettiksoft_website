import { Component } from '@angular/core';
import { EnquireFormComponent } from '../../enquire-form/enquire-form.component';
import { EnquirePopupService } from '../../enquire-popup.service';

@Component({
  selector: 'app-variant-switch-testing',
  templateUrl: './variant-switch-testing.component.html',
  styleUrls: ['./variant-switch-testing.component.css']
})
export class VariantSwitchTestingComponent {
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
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
