import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionVoitureComponent } from './components/gestion-voiture/gestion-voiture.component';
import { GestionInterfaceComponent } from './container/gestion-interface/gestion-interface.component';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionRoutingModule } from './gestion-routing.module';
import { ReparationInterfaceComponent } from './container/reparation-interface/reparation-interface.component';
import { ReparationsComponent } from './components/reparations/reparations.component';

@NgModule({
  declarations: [GestionVoitureComponent, GestionInterfaceComponent, ReparationsComponent, ReparationInterfaceComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    GestionRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
})
export class GestionModule { }
