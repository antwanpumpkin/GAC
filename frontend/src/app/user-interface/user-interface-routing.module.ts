import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilInterfaceComponent } from '../accueil/container/accueil-interface/accueil-interface.component';
import { GestionInterfaceComponent } from '../gestion/container/gestion-interface/gestion-interface.component';
import { UserInterfaceComponent } from './container/user-interface/user-interface.component';

const routes: Routes = [
  {
      path: '',
      component: UserInterfaceComponent,
      children: [
        {
          path: '',
          component: AccueilInterfaceComponent
        },
        {
          path: 'gestion',
          component: GestionInterfaceComponent
         // loadChildren: () => import('../gestion/gestion.module').then(m => m.GestionModule),
        },
        {
          path: '**',
          redirectTo: '/',
          pathMatch: 'full'
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
