import { TestBed } from '@angular/core/testing';

import { CareersFormService } from './careers-form.service';

describe('CareersFormService', () => {
  let service: CareersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
