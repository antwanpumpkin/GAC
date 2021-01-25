import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionInterfaceComponent } from './container/gestion-interface/gestion-interface.component';

const gestionRoutes: Routes = [
  {
    path: '',
    component: GestionInterfaceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(gestionRoutes)
  ],
  exports: [RouterModule]
})
export class GestionRoutingModule {}
