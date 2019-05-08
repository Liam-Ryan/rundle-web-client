import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth.guard.service';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthService, AuthGuardService],
    imports: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
