import { TestBed, inject } from '@angular/core/testing';

import { BannerLinksService } from './banner-links.service';

describe('BannerLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BannerLinksService]
    });
  });

  it('should be created', inject([BannerLinksService], (service: BannerLinksService) => {
    expect(service).toBeTruthy();
  }));
});
