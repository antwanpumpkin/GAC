import { AccueilInterfaceComponent } from './container/accueil-interface/accueil-interface.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const accueilRoutes: Routes = [
  {
    path: '',
    component: AccueilInterfaceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accueilRoutes)
  ],
  exports: [RouterModule]
})
export class AccueilRoutingModule {}
