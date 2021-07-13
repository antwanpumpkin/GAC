import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionInterfaceComponent } from './containers/connexion-interface/connexion-interface.component';
import { CreationInterfaceComponent } from './containers/creation-interface/creation-interface.component';

const routes: Routes = [
  {
    path: 'connexion', component: ConnexionInterfaceComponent
  },
  {
    path: 'creation', component: CreationInterfaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingRoutingModule { }
