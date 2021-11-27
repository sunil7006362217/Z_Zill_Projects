import { TestBed } from '@angular/core/testing';

import { HttpApiCallService } from './http-api-call.service';

describe('HttpApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpApiCallService = TestBed.get(HttpApiCallService);
    expect(service).toBeTruthy();
  });
});
