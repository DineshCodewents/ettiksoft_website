import { Component } from '@angular/core';
import { EnquiryServicePopupService } from '../../enquiry-service-popup.service';
import { EnquiryFormComponent } from '../../enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-excel-in-versatile',
  templateUrl: './excel-in-versatile.component.html',
  styleUrls: ['./excel-in-versatile.component.css']
})
export class ExcelInVersatileComponent {
  // constructor(private modalService: EnquiryServicePopupService) {}

  // openEnquirePopup(): void {
  //   this.modalService.openPopup(EnquiryFormComponent);
  // }
  public iconClass: string = 'fa fa-angle-right';

  changeIcon() {
    this.iconClass = 'fa fa-arrow-right';
  }

  resetIcon() {
    this.iconClass = 'fa fa-angle-right';
  }

  public clients = [
    { src: '../../../../../assets/images/1 (1).png', alt: 'bosch-img' },
    { src: '../../../../../assets/images/4.png', alt: 'murugapa-img' },
    { src: '../../../../../assets/images/5 (1).png', alt: 'mahindra-img' },
    { src: '../../../../../assets/images/Group 12.jpg', alt: 'spectrum-img' },
    { src: '../../../../../assets/images/5.png', alt: 'mahindra-electric-img' }
  ];
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }

  generateSkeleton(count: number): Array<any> {
    const skeletonArray = new Array(count).fill(null);
    return skeletonArray;
  }
}
