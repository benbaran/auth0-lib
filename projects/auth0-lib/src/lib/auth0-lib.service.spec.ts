import { TestBed } from '@angular/core/testing';

import { Auth0LibService } from './auth0-lib.service';

describe('Auth0LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth0LibService = TestBed.get(Auth0LibService);
    expect(service).toBeTruthy();
  });
});
