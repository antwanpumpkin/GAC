import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { UserService } from "src/ws_contrat/target/generated-sources/gac/services/user.service";
import { AuthentificationImpl } from "../models/authentification-impl";
import { UserInfosImpl } from "../models/user-infos-impl";
import { map, catchError } from 'rxjs/operators';
import { StatusAccount } from "../enum/status-account.enum";
import { UserInfos } from "src/ws_contrat/target/generated-sources/gac/models";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user$ = new BehaviorSubject<UserInfosImpl>(null);

  constructor(private userService: UserService, private router: Router) {
    if (localStorage.getItem('user') !== undefined) {
      let jsonObj = JSON.parse(localStorage.getItem('user'));
      let fObj = <UserInfosImpl>jsonObj;
      this.user$.next(fObj)
    }
  }

  createUser(user: UserInfosImpl): Observable<string> {
    return this.userService.create(user).pipe(
      map((res: string) => {
        return StatusAccount.OK;
      }),
      catchError((err):Observable<string> => {
        if (err.status == 409) {
          return of(StatusAccount.USEREXIST);
        }
        return of(StatusAccount.KO);
      })
    );
  }

  authentification(infos: AuthentificationImpl): Observable<string> {
    return this.userService.connexion(infos).pipe(
      map((res: UserInfosImpl) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.user$.next(res);
        this.router.navigate(['/tableau-bord/accueil'])
        return StatusAccount.OK;
      }),
      catchError((): Observable<string> => {
        return of(StatusAccount.KO);
      })
    )
  }

  modificationProfil(user: UserInfosImpl): Observable<string> {
    return this.userService.modification(user).pipe(
      map((res: string) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.user$.next(user);
        return StatusAccount.OK;
      }),
      catchError(():Observable<string> => {
        return of(StatusAccount.KO);
      })
    )
  }

  logout() {
    console.log("logout");
    localStorage.removeItem('user');
    this.user$.next(null);
    this.router.navigate(['/']);
  }

  getUser(): UserInfosImpl {
    return JSON.parse(localStorage.getItem('user'));
  }
}
