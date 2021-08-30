import { Injectable, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthentificationImpl } from "../models/authentification-impl";
import { AccountService } from "./account-service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    user: AuthentificationImpl;

    constructor(private accountService: AccountService) {
        this.user = undefined;
        this.accountService.user$.subscribe((user) => {
            console.log("Update user:" + JSON.stringify(user))
            this.user = user;
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.user)
        if (this.user != undefined || this.user != null) {
            console.log(this.user)
            return true;
        }
        return false;
    }
}
