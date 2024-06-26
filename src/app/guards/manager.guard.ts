import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { auth_service } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class manager_guard implements CanActivate {
    constructor(private auth: auth_service, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.auth.getAuthenticated().pipe(map((user) => {
            if (this.auth.userRoles.manager !== true) {
            this.router.navigate(['']);
            return false;
            }
            return true;
        }));
    }
}