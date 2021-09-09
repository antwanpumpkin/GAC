import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionInterfaceComponent } from './containers/connexion-interface/connexion-interface.component';
import { CreationInterfaceComponent } from './containers/creation-interface/creation-interface.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreationComponent } from './components/creation/creation.component';
import { UtilisateurRoutingRoutingModule } from './utilisateur-routing-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilInterfaceComponent } from './containers/profil-interface/profil-interface.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ConnexionInterfaceComponent, CreationInterfaceComponent, ConnexionComponent, CreationComponent, ProfilInterfaceComponent, ProfilComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UtilisateurModule { }
