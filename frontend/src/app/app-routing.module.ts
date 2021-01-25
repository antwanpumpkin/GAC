import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';


const APP_ROUTES: Routes = [
  {
    path: '',
    component : AppComponent,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule),
        data: { title: 'Accueil - GAC' }
      },
      {
        path: 'gestion',
        loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule),
        data: { title: 'Gestion - GAC' }
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      }
    ]
  }
]


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
