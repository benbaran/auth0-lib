import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Auth0LibService} from './auth0-lib.service';

@Injectable({
  providedIn: 'root'
})
export class Auth0LibGuard implements CanActivate {

  constructor(private auth: Auth0LibService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthenticated();
  }
}
