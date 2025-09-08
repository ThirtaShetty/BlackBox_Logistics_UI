import { TestBed } from '@angular/core/testing';

import { Pincode } from './pincode';

describe('Pincode', () => {
  let service: Pincode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pincode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
