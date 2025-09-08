import { TestBed } from '@angular/core/testing';

import { AssignmentApis } from './assignment-apis';

describe('AssignmentApis', () => {
  let service: AssignmentApis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentApis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
