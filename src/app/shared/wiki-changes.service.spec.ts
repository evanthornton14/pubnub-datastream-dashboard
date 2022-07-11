import { TestBed } from '@angular/core/testing';

import { WikiChangesService } from './wiki-changes.service';

describe('WikiChangesService', () => {
  let service: WikiChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
