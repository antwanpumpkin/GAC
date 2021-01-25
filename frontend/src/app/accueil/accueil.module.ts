import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main/main.component';
import { AccueilInterfaceComponent } from './container/accueil-interface/accueil-interface.component';
import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  declarations: [MainComponent, AccueilInterfaceComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
