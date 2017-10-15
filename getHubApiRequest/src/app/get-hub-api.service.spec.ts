import { TestBed, inject } from '@angular/core/testing';

import { GetHubApiService } from './get-hub-api.service';

describe('GetHubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHubApiService]
    });
  });

  it('should be created', inject([GetHubApiService], (service: GetHubApiService) => {
    expect(service).toBeTruthy();
  }));
});
