import { TestBed } from '@angular/core/testing';

import { EnquirePopupService } from './enquire-popup.service';

describe('EnquirePopupService', () => {
  let service: EnquirePopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquirePopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
