import { TestBed } from '@angular/core/testing';

import { GlSubheadsResolver } from './gl-subheads.resolver';

describe('GlSubheadsResolver', () => {
  let resolver: GlSubheadsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GlSubheadsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
