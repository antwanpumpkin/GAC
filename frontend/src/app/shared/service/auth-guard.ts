import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "./account-service";

export class AuthGuard implements CanActivate {

    constructor(private accountService: AccountService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.accountService.user.subscribe((user) => {
            if (user !== null) {
                return true;
            }
        })
        return false;
    }
}
