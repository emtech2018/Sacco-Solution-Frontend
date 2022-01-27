import { TestBed } from '@angular/core/testing';

import { GlSubheadsService } from './gl-subheads.service';

describe('GlSubheadsService', () => {
  let service: GlSubheadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSubheadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
