import { TestBed } from '@angular/core/testing';

import { TdProductResolver } from './td-product.resolver';

describe('TdProductResolver', () => {
  let resolver: TdProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TdProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
