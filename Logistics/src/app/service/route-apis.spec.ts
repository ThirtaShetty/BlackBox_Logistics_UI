import { TestBed } from '@angular/core/testing';

import { RouteApis } from './route-apis';

describe('RouteApis', () => {
  let service: RouteApis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteApis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
