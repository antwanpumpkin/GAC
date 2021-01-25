import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionRoutingModule } from './gestion-routing.module';
import { GestionVoitureComponent } from './components/gestion-voiture/gestion-voiture.component';
import { GestionInterfaceComponent } from './container/gestion-interface/gestion-interface.component';

@NgModule({
  declarations: [GestionVoitureComponent, GestionInterfaceComponent],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
