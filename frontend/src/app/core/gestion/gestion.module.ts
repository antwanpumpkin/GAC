import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionVoitureComponent } from './components/gestion-voiture/gestion-voiture.component';
import { GestionInterfaceComponent } from './container/gestion-interface/gestion-interface.component';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestionVoitureComponent, GestionInterfaceComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
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
