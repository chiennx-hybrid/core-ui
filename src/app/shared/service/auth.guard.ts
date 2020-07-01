import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthenticated = sessionStorage.getItem('AUTHENTICATED');
        if (!!isAuthenticated && Boolean(isAuthenticated)) {
            return true;
        }
        this.router.navigate(['/login']).then(r => r.valueOf());
        return false;
    }
}
