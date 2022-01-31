import { TestBed } from '@angular/core/testing';

import { GlResolver } from './gl.resolver';

describe('GlResolver', () => {
  let resolver: GlResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GlResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
