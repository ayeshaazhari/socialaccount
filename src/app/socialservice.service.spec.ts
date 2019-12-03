import { TestBed } from '@angular/core/testing';

import { SocialserviceService } from './socialservice.service';

describe('SocialserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialserviceService = TestBed.get(SocialserviceService);
    expect(service).toBeTruthy();
  });
});
