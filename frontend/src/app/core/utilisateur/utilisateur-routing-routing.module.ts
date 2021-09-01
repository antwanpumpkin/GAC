import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth-guard';
import { ConnexionInterfaceComponent } from './containers/connexion-interface/connexion-interface.component';
import { CreationInterfaceComponent } from './containers/creation-interface/creation-interface.component';
import { ProfilInterfaceComponent } from './containers/profil-interface/profil-interface.component';

const routes: Routes = [
  {
    path: 'connexion', component: ConnexionInterfaceComponent
  },
  {
    path: 'creation', component: CreationInterfaceComponent
  },
  {
    path: 'profil', component: ProfilInterfaceComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingRoutingModule { }
