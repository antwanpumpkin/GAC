import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserInterfaceModule } from './user-interface/user-interface.module';


const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren:() => import('./user-interface/user-interface.module').then(m => m.UserInterfaceModule),
  },
  {
    path: '**',
    redirectTo :'/accueil'
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
