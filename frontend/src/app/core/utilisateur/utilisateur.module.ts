import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionInterfaceComponent } from './containers/connexion-interface/connexion-interface.component';
import { CreationInterfaceComponent } from './containers/creation-interface/creation-interface.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreationComponent } from './components/creation/creation.component';
import { UtilisateurRoutingRoutingModule } from './utilisateur-routing-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConnexionInterfaceComponent, CreationInterfaceComponent, ConnexionComponent, CreationComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UtilisateurModule { }
