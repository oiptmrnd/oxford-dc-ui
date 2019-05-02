import { TestBed } from '@angular/core/testing';

import { UrlManagerService } from './url-manager.service';

describe('UrlManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlManagerService = TestBed.get(UrlManagerService);
    expect(service).toBeTruthy();
  });
});
