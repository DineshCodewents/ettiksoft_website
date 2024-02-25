import { TestBed } from '@angular/core/testing';

import { EnquiryServicePopupService } from './enquiry-service-popup.service';

describe('EnquiryServicePopupService', () => {
  let service: EnquiryServicePopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryServicePopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
