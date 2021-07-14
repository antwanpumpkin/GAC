import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthentificationImpl } from "../models/authentification-impl";
import { AccountService } from "./account-service";

export class AuthGuard implements CanActivate {
    user: AuthentificationImpl;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe((user) => {
            console.log("Update user:" + JSON.stringify(user))
            this.user = user;
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.user !== null) {
            return true;
        }
        return false;
    }
}
