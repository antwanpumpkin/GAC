import { Injectable, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserInfosImpl } from "../models/user-infos-impl";
import { AccountService } from "./account-service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    user: UserInfosImpl;
    mock = false;

    constructor(private accountService: AccountService, private router: Router) {
        this.user = undefined;
        this.accountService.user$.subscribe((user) => {
            console.log("Update user:" + JSON.stringify(user))
            this.user = user;
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        console.log(this.user)
        if (this.user != undefined || this.user != null) {
            console.log(this.user)
            return true;
        }
        return this.router.parseUrl('/');
    }

    getToken() {
        console.log(this.user.token || '')
        return this.user.token || '';
    }
}
