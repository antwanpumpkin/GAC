import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AccueilInterfaceComponent } from './accueil/container/accueil-interface/accueil-interface.component';
import { GestionInterfaceComponent } from './gestion/container/gestion-interface/gestion-interface.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AccueilInterfaceComponent
  },
  {
    path: 'gestion',
    component: GestionInterfaceComponent
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
