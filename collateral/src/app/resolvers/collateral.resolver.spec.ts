import { TestBed } from '@angular/core/testing';

import { CollateralResolver } from './collateral.resolver';

describe('CollateralResolver', () => {
  let resolver: CollateralResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CollateralResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
