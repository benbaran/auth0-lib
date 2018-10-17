import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth0LibService } from 'auth0-lib/auth0-lib';

@Injectable({
  providedIn: 'root'
})
export class Auth0Guard implements CanActivate {

  constructor(private auth: Auth0LibService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.auth.isAuthenticated();
  }
}
