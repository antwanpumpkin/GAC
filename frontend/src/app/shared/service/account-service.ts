import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { UtilisateurService } from "src/ws_contrat/target/generated-sources/gac/services/utilisateur.service";
import { AuthentificationImpl } from "../models/authentification-impl";
import { UserInfosImpl } from "../models/user-infos-impl";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user = new BehaviorSubject<AuthentificationImpl>(null);

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
  }

  createUser(user: UserInfosImpl) {
    return this.utilisateurService.creation(user);
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
