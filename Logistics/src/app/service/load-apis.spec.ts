import { TestBed } from '@angular/core/testing';

import { LoadApis } from './load-apis';

describe('LoadApis', () => {
  let service: LoadApis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadApis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
