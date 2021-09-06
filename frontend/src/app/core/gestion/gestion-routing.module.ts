import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth-guard';
import { GestionInterfaceComponent } from './container/gestion-interface/gestion-interface.component';
import { ReparationInterfaceComponent } from './container/reparation-interface/reparation-interface.component';

const routes: Routes = [
  {
    path: 'voiture', component: GestionInterfaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reparation', component: ReparationInterfaceComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
