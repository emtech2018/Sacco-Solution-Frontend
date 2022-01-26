import { TestBed } from '@angular/core/testing';

import { InterestResolverResolver } from './interest-resolver.resolver';

describe('InterestResolverResolver', () => {
  let resolver: InterestResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InterestResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
