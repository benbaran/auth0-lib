import { TestBed, async, inject } from '@angular/core/testing';

import { Auth0LibGuard } from './auth0-lib.guard';

describe('Auth0LibGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth0LibGuard]
    });
  });

  it('should ...', inject([Auth0LibGuard], (guard: Auth0LibGuard) => {
    expect(guard).toBeTruthy();
  }));
});
