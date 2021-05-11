import { TestBed } from '@angular/core/testing';

import { MovieByPopularityService } from './movie-by-popularity.service';

describe('MovieByPopularityService', () => {
  let service: MovieByPopularityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieByPopularityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
