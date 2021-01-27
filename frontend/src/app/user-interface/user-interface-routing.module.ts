import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceComponent } from './container/user-interface/user-interface.component';

const routes: Routes = [
  {
      path: '',
      component: UserInterfaceComponent,
      children: [
        {
          path: 'accueil',
          loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilModule),
          data: { title: 'Accueil - GAC' }
        },
        {
          path: 'gestion',
          loadChildren: () => import('../gestion/gestion.module').then(m => m.GestionModule),
          data: { title: 'Gestion - GAC' }
        },
        {
          path: '',
          redirectTo: 'accueil',
          pathMatch: 'full'
        }
      ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
