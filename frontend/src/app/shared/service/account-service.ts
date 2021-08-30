import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { UtilisateurService } from "src/ws_contrat/target/generated-sources/gac/services/utilisateur.service";
import { AuthentificationImpl } from "../models/authentification-impl";
import { UserInfosImpl } from "../models/user-infos-impl";
import { map, catchError } from 'rxjs/operators';
import { CreateUser } from "../enum/create-user.enum";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user = new BehaviorSubject<AuthentificationImpl>(null);

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    if (localStorage.getItem('user') !== undefined) {
      let jsonObj = JSON.parse(localStorage.getItem('user'));
      let fObj = <AuthentificationImpl>jsonObj;
      this.user.next(fObj)
    }
  }

  createUser(user: UserInfosImpl): Observable<string> {
    return this.utilisateurService.creation(user).pipe(
      map((res: string) => {
        return CreateUser.OK;
      }),
      catchError(():Observable<string> => {
        return of(CreateUser.KO);
      })
    );
  }

  authentification(infos: AuthentificationImpl) {
    this.utilisateurService.connexion(infos).subscribe((response) => {
      console.log(response);
      localStorage.setItem('user', JSON.stringify(infos));
      this.user.next(infos);
      this.router.navigate(['/tableau-bord/accueil'])
    })
  }

  logout() {
    console.log("logout");
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigate(['/']);
  }
}
