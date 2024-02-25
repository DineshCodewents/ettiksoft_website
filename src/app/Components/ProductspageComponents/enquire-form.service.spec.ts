import { TestBed } from '@angular/core/testing';

import { EnquireFormService } from './enquire-form.service';

describe('EnquireFormService', () => {
  let service: EnquireFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquireFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
