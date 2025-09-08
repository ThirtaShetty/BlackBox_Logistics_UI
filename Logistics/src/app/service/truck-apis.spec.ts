import { TestBed } from '@angular/core/testing';

import { TruckApis } from './truck-apis';

describe('TruckApis', () => {
  let service: TruckApis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckApis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
