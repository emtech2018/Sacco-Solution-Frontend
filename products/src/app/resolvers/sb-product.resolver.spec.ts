import { TestBed } from '@angular/core/testing';

import { SbProductResolver } from './sb-product.resolver';

describe('SbProductResolver', () => {
  let resolver: SbProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SbProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
