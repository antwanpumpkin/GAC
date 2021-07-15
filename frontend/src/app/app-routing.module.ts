import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AccueilInterfaceComponent } from './core/accueil/container/accueil-interface/accueil-interface.component';
import { GestionInterfaceComponent } from './core/gestion/container/gestion-interface/gestion-interface.component';
import { UtilisateurModule } from './core/utilisateur/utilisateur.module';
import { AuthGuard } from './shared/service/auth-guard';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AccueilInterfaceComponent
  },
  {
    path: 'tableau-bord/accueil',
    component: AccueilInterfaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestion',
    component: GestionInterfaceComponent
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./core/utilisateur/utilisateur.module').then((m) => m.UtilisateurModule)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
