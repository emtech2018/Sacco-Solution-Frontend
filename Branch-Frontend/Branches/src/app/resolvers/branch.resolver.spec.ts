import { TestBed } from '@angular/core/testing';

import { BranchResolver } from './branch.resolver';

describe('BranchResolver', () => {
  let resolver: BranchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BranchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
