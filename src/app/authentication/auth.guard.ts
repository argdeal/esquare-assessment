import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> {
        if(this.auth.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigate(['login']);
        }
        return of(false);
    }

}