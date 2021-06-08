import { TestBed } from '@angular/core/testing';

import { ApiUtilsService } from './api-utils.service';

describe('ApiUtilsService', () => {
  let service: ApiUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
