import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { UtilisateurService } from "src/ws_contrat/target/generated-sources/gac/services/utilisateur.service";
import { AuthentificationImpl } from "../models/authentification-impl";
import { UserInfosImpl } from "../models/user-infos-impl";

@Injectable({
    providedIn: 'root'
  })
export class AccountService {
    user = new Subject<AuthentificationImpl>();

    constructor(private utilisateurService: UtilisateurService) {
    }

    createUser(user: UserInfosImpl)  {
      return this.utilisateurService.creation(user);
    }

    authentification(infos: AuthentificationImpl): Observable<AuthentificationImpl> {
        this.utilisateurService.connexion(infos).subscribe((response) => {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(infos));
            this.user.next(infos);
            return this.user.asObservable();
        })
        return null;
    }
}
