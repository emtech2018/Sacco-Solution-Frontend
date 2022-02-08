import { TestBed } from '@angular/core/testing';

import { OdProductResolver } from './od-product.resolver';

describe('OdProductResolver', () => {
  let resolver: OdProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OdProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
