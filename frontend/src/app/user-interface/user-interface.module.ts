import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilModule } from '../accueil/accueil.module';
import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { UserInterfaceComponent } from './container/user-interface/user-interface.component';
import { GestionModule } from '../gestion/gestion.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserInterfaceComponent
  ],
  imports: [
    CommonModule,
    AccueilModule,
    UserInterfaceRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    GestionModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    UserInterfaceComponent
  ]
})
export class UserInterfaceModule { }
