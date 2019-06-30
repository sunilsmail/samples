import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const stringValue = localStorage.getItem('isloggedin');
    const boolValue = JSON.parse(stringValue);
    if (boolValue === true) {
      return true;
    } else {

      this.route.navigate(['/login']);

      return false;
    }

  }

  constructor(private route: Router) { }
}
