import { TestBed } from '@angular/core/testing';

import { CommonApiCallServicesService } from './common-api-call-services.service';

describe('CommonApiCallServicesService', () => {
  let service: CommonApiCallServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonApiCallServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
